export default function ColoredText({ children }: any) {
    return (
        <>
            <span 
              className="
                text-black 
                bg-clip-text 
                text-opacity-0 
                bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 
                dark:text-white 
                dark:bg-clip-text 
                dark:text-opacity-0 
                dark:bg-gradient-to-r dark:from-pink-500 dark:via-purple-500 dark:to-indigo-500 
                background-animate"
            >
                {children}
            </span>
        </>
    )
}
