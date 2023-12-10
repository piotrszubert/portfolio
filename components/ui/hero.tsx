import { Button } from "./button";
import Link from "next/link";

export const Hero = () => {
    return(
        <div className="max-w-xl space-y-3">
          <h1 className='text-2xl font-bold lg:text-3xl'>
            Frontend development specialist 
            and software engineer.
          </h1>
          <p className="text-muted-foreground">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi 
            blanditiis accusamus, soluta debitis omnis inventore molestiae quisquam laborum possimus in.
          </p>
          <Button
            asChild
            variant="outline"
            className="rounded-2xl gap-2"
            size="sm"
          >
            <Link href="mailto:piotr.szubert777@gmail.com">
              <span
                className="h-2 w-2 animate-pulse duration-1000 bg-green-400 block rounded-full"
              >

              </span>
              Open for work 
            </Link>
          </Button>
        </div>
    );
}