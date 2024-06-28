"use client"
import { ListServer } from '@/actions/listserver'
import Formwrapper, { formSchema } from '@/components/Formwrapper'
import React, { useCallback, useEffect, useState } from 'react'
import { RiDeleteBin5Line } from "react-icons/ri";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from '@/components/ui/button'
import { deleteserver } from '@/actions/deleteserver';
import { z } from 'zod';
import { updateserver } from '@/actions/compelete';

const Page = () => {
  const [data, setData] = useState<any>()
  useEffect(() => {

    ListServer()
      .then((data: any) => {
        setData(data)
        console.log(data)
      })
  }, [data])

  const handledelete = useCallback((id:string) => {
    deleteserver(id)
   
  }, []);

  const handleupadte= useCallback((id:string) => {

    updateserver(id)
   
  }, []);



  return (
    <div className='h-screen w-screen flex flex-col'>

      <div className='grid grid-cols-3 mt-10 flex justify-center items-center ml-56' >
        <div className='w-[200px] h-[100px] border border-black bg-blue-300 rounded-xl flex justify-center items-center flex-col'>
          <div className='text-xl text-black'>Total Tasks</div>
          <div className='text-6xl text-black font-mono'>04</div>
        </div>
        <div className='w-[200px] h-[100px] border border-black bg-green-200 rounded-xl  flex justify-center items-center flex-col'>
          <div className='text-xl text-black'>Completed</div>
          <div className='text-6xl text-black font-mono'>0</div>
        </div>
        <div className='w-[200px] h-[100px] border border-black bg-orange-200 rounded-xl  flex justify-center items-center flex-col'>
          <div className='text-xl text-black'>Pending</div>
          <div className='text-6xl text-black font-mono'>04</div>
        </div>

      </div>
      <div className='flex justify-center items-center mt-10'>
        <Formwrapper />
      </div>
      <div className='mt-10 space-y-9 mx-24'>
        {
          data?.map((datas: any, index: number) => {
            return (
              <Card className=' flex flex-row border-black justify-center items-center ' key={index} >

                <CardContent className='mt-8 '>
                  {datas.tweet}
                </CardContent>
                <CardFooter className='flex ml-auto mr-4 mt-8'>
                  <Button className='bg-orange-200 gap-x-3 border border-black rounded-xl' onClick={()=> handleupadte(datas.id)} >
                    
                    <div className='text-black'>  🙄  Mark as incomplete</div>
                   
                
                      
  
                  </Button>
                  <Button variant={'ghost'} className='text-3xl ' onClick={() => handledelete(datas.id)}>
                    <RiDeleteBin5Line />
                  </Button>

                </CardFooter>
              </Card>

            )
          })
          
        }




      </div>


      <div className='mt-10 flex flex-row justify-between '>
        <Button variant={'outline'} className='ml-24 border border-black ' >👈 Previous </Button>
        <Button variant={'outline'} className='mr-24 border border-black'>👉 Next </Button>

      </div>


    </div>
  )
}

export default Page