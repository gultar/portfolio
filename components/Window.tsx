import { asset, Head } from "https://deno.land/x/fresh@1.1.2/runtime.ts"

const WindowElement = () =>{
    return(
        <>  
            <Head>
                <link rel="stylesheet" href="main.css" type="text/css"/>
                <link rel="canonical" href="https://robwu.nl/cors-anywhere.html"/>
                <script src="https://code.jquery.com/jquery-2.1.1.min.js"></script>
                <script  src="https://code.jquery.com/ui/1.12.0/jquery-ui.min.js"
                        integrity="sha256-eGE6blurk5sHj+rmkfsGYeKyZx3M4bG+ZlFyA7Kns7E="
                        crossOrigin="anonymous"></script>
                <script src={asset("./Terminal.js")}></script>
                <script src={asset("./main.js")}></script>
                <script src={asset("./Browser.js")}></script>
            </Head>
            <div id="terminal-window">
                <script src={asset("window-creator.js")}></script>
                <div id="container">
                        <output>
                        </output>
                        <div action="#" id="input-line" class="input-line">
                            <div class="prompt"></div><div><input class="cmdline" autofocus /></div>
                        </div>
                        <button id="mobile-enter">Enter</button>
                </div>
            </div>
            
        </>
    )
}

export default WindowElement