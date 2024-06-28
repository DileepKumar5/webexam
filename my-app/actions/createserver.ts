"use server"

import { formSchema } from "@/components/Formwrapper"
import { prisma } from "@/lib/prisma";
import { z } from "zod"

export const createserver = async (values: z.infer<typeof formSchema>) => {

    console.log(values);
    const creqateform = await prisma.tweetmodel.create({
        data:{
            tweet: values.task,
            iscompleted: values.iscompeleted,

        }
    })
    console.log(creqateform)
}

