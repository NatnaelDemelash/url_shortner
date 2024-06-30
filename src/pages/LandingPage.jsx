import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const LandingPage = () => {
  return (
    <div className="flex flex-col items-center">
      <h2 className="my-10 sm:my-16 text-3xl md:text-6xl lg:text-7xl text-center font-extrabold">
        The Only URL shortner you will ever need! 👇🏽
      </h2>
      <p className="text-center max-w-[800px] mx-auto">
        A free tool to shorten URLs and generate short links URL shortener
        allows to create a shortened link making it easy to share
      </p>
      <form className="sm:h-14 flex flex-col sm:flex-row w-full md:w-2/4 gap-3 mt-4 mb-2">
        <Input
          type="url"
          placeholder="Paste the long url here"
          className="h-full flex-1 py-3 px-3"
        />
        <Button className="h-full">Shorten URL</Button>
      </form>
      <img
        src="/public/banner.png"
        alt="Banner image"
        className="w-full my-11 md:px-11"
      />

      <Accordion type="multiple" collapsible className="w-full md:px-11">
        <AccordionItem value="item-1">
          <AccordionTrigger>
            How does the Trimrr URL shortener works?
          </AccordionTrigger>
          <AccordionContent>
            When you enter a long URL, our system generates a shorter version of
            that URL. This shortened URL redirects to the original long URL when
            accessed.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>
            Do I need an account to use the app?
          </AccordionTrigger>
          <AccordionContent>
            Yes. Creating an account allows you to manage your URLs, view
            analytics, and customize your short URLs.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>
            What analytics are available for my shortened URLs?
          </AccordionTrigger>
          <AccordionContent>
            You can view the number of clicks, geolocation data of the clicks
            and device types (mobile/desktop) for each of your shortened URLs.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default LandingPage;