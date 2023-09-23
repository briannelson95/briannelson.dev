import Image from 'next/image';
import Link from 'next/link';
import urlFor from '../lib/urlFor';
import Refractor from 'react-refractor';
import ts from 'refractor/lang/typescript';
import tsx from 'refractor/lang/tsx';
import css from 'refractor/lang/css';

Refractor.registerLanguage(ts);
Refractor.registerLanguage(tsx);
Refractor.registerLanguage(css);

export const RichTextComponent: any = {
    types: {
        image: ({ value }: any) => {
            return (
                <div className='relative w-full h-96 m-10 mx-auto'>
                    <Image 
                        className='object-contain'
                        src={urlFor(value).url()} 
                        alt={value.alt}
                        fill
                    />
                </div>
            );
        },
        code: ({ value }: any) => {
            return (
                <div className='dark:bg-zinc-700 p-5 m-5 bg-zinc-300 max-w-lg flex flex-wrap'>
                    <Refractor
                        language={value.language}
                        value={value.code}
                        markers={value.highlightedLines}
                    />
                </div>
            )
        }
    },
    list: {
        bullet: ({ children }: any) => {
            <ul className='ml-10 py-5 list-disc space-y-5'>{children}</ul>
        },
        number: ({ children }: any) => {
            <ol className='mt=lg list-decimal'>{children}</ol>
        },
    },
    block: {
        // Ex. 1: customizing common block types
        h1: ({children}: any) => <h1 className="text-2xl">{children}</h1>,
        h2: ({ children }: any) => <h2 className='text-4xl py-10 font-bold'>{children}</h2>,
        h3: ({ children }: any) => <h3 className='text-3xl py-10 font-bold'>{children}</h3>,
        h4: ({ children }: any) => <h4 className='text-2xl py-10 font-bold'>{children}</h4>,
        blockquote: ({ children }: any) => (
            <blockquote className='border-l-slate-500 border-l-4 pl-5 py-5 my-5'>
                {children}
            </blockquote>
        )
    },
    marks: {
        link: ({ children, value }: any) => {
            const rel = !value.href.startsWith("")
                ? "noreferrer noopener"
                : undefined;
            
            return (
                <Link
                    href={value.href}
                    rel={rel}
                    className="underline decoration-slate-800 text-purple-600 dark:text-purple-500"
                >
                    {children}
                </Link>
            )
        }
    }
}

