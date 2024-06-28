"use server"


import { prisma } from "@/lib/prisma";


export const ListServer = async () => {


   return await prisma.tweetmodel.findMany()

}

