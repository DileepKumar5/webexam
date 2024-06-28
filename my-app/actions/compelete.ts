"use server"

import { formSchema } from "@/components/Formwrapper"
import { prisma } from "@/lib/prisma";
import { z } from "zod"

export const updateserver = async (id:string) => {

  
    const updateform = await prisma.tweetmodel.updateMany({
        where:{
            id:id,
        },
        data:{
            iscompleted: true,

        }
    })

}

