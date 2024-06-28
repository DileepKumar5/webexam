"use server"

import { prisma } from "@/lib/prisma";


export const deleteserver = async (id:string) => {


    const deletetweet = await prisma.tweetmodel.deleteMany({
        where:{
            id:id,
        }

    })
    console.log(deletetweet)
}

