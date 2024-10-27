import React from 'react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger, } from "@/components/ui/accordion";
import Link from "next/link";

const Accordion_provider = () => {
  return (
    <div>     <Accordion type="single" collapsible className="w-full px-8 md:px-36 bg-[rgb(217,217,217)] mt-8">
    <AccordionItem value="item-1">
      <AccordionTrigger className="md:text-base">GET IN TOUCH</AccordionTrigger>
      <AccordionContent>
      <p>Location: Plot no. 00 xyz Building, Street no. 00, Karachi, Pakistan.</p>
      <p className="mt-2">Email: shahzohaib0987@gmail.com</p>
      <p className="mt-2">Phone: 0321-8978713</p>
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-2">
      <AccordionTrigger className="md:text-base">CUSTOMER SUPPORT</AccordionTrigger>
      <AccordionContent>
      <Link href="/"><p>Shipping policy</p></Link>
      <Link href="/"><p className="mt-2">Return & Exchange policy</p></Link>
      <Link href="sizeguide"><p className="mt-2">Size Guide</p></Link>
      <Link href="/"><p className="mt-2">Terms of service</p></Link>
      <Link href="/"><p className="mt-2">Privacy policy</p></Link>
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-3">
      <AccordionTrigger className="md:text-base">ABOUT US</AccordionTrigger>
      <AccordionContent>
      Welcome to ZEE SHOES  ! We’re passionate about providing stylish, high-quality shoes that let you express your unique style. Founded in [2023], we curate our collections with comfort and sustainability in mind.
      Whether you’re looking for trendy sneakers or elegant heels, we have the perfect pair for you. Thank you for choosing ZEE SHOES let’s take each step in style!
      </AccordionContent>
    </AccordionItem>
  </Accordion></div>
  )
}

export default Accordion_provider