"use client";
import { useState } from "react";
// components/ui
import { Section } from "./Section";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

// data
import { z } from "zod";
import { formSchema } from "@/lib/schema";
import { send } from "@/lib/email";

export const Contact = () => {
    const [isPending, setIsPending] = useState(false);
    const [successMessage, setSuccessMessage] = useState<string | null>(null);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            firstName: "",
            lastName: "",
            email: "",
            message: "",
        },
    });
    
    async function onSubmit(values: z.infer<typeof formSchema>) {
        setIsPending(true);
        setSuccessMessage(null);
        setErrorMessage(null);

        try {
            const result = await send(values);
            if (result.success) {
                setSuccessMessage("Votre message a bien été envoyé !");
                form.reset();
            } else {
                setErrorMessage(`Erreur : ${result.error}`);
            }
        } catch {
            setErrorMessage("Une erreur est survenue lors de l'envoi.");
        } finally {
            setIsPending(false);
        }
    }

    return (
        <Section>
            <Card>
                <CardHeader>
                    <CardTitle>Me contacter</CardTitle>
                    <CardDescription>Remplissez le formulaire ci-dessous afin de me contacter</CardDescription>
                </CardHeader>
                <CardContent>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                            <div className="grid grid-cols-2 gap-4">
                                <FormField
                                    control={form.control}
                                    name="firstName"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>First name</FormLabel>
                                            <FormControl>
                                                <Input placeholder="John" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="lastName"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Last name</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Doe" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />  
                            </div>
                            <div className="space-y-2">
                                <FormField
                                    control={form.control}
                                    name="email"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Email</FormLabel>
                                            <FormControl>
                                                <Input placeholder="john.doe@example.com" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />   
                            </div> 
                            <div className="space-y-2">
                                <FormField
                                    control={form.control}
                                    name="message"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Message</FormLabel>
                                            <FormControl>
                                                <Textarea 
                                                    id="message"
                                                    placeholder="Comment puis-je vous aider ?"
                                                    className="min-h-[120px]"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />        
                            </div> 

                            {successMessage && <p className="text-green-600 text-sm">{successMessage}</p>}
                            {errorMessage && <p className="text-red-600 text-sm">{errorMessage}</p>}

                            <Button type="submit" className="ml-auto hover:cursor-pointer" disabled={isPending}>
                                {isPending ? "Envoi en cours..." : "Submit"}
                            </Button>                       
                        </form>
                    </Form>
                </CardContent>
            </Card>
        </Section>
    );
};