import { Head, asset } from "$fresh/runtime.ts";

const TerminalBox = () =>{
    return(
        <>
            <Head>
                    <link href="https://fonts.googleapis.com/css?family=Inconsolata"
                        rel="stylesheet" type="text/css" />
                    <link rel="stylesheet" href="main.css" type="text/css"/>
                    <link rel="canonical" href="https://robwu.nl/cors-anywhere.html"/>
                    <script src="https://code.jquery.com/jquery-2.1.1.min.js"></script>
                    <script  src="https://code.jquery.com/ui/1.12.0/jquery-ui.min.js"
                            integrity="sha256-eGE6blurk5sHj+rmkfsGYeKyZx3M4bG+ZlFyA7Kns7E="
                            crossOrigin="anonymous"></script>
                    <script src={asset("./Terminal.js")}></script>
                    <script src={asset("./main.js")}></script>
                    <script src={asset("./window-drag.js")}></script>
            </Head>
            <div id="terminal-window" style="
            display:block;
            position:absolute;
            z-index:9;
            overflow:scroll;
            ">
                <div id="terminal-window-dragger">Click here to move</div>
                
                <div id="terminal-display">

                    <div id="container">
                
                        <output>
                        </output>
                
                        <div action="#" id="input-line" class="input-line">
                
                        <div class="prompt"></div><div><input class="cmdline" autofocus /></div>
                
                        </div>
                
                        <button id="mobile-enter">Enter</button>
                    </div>
                </div>
                <script src={asset("./window-drag.js")}></script>
            </div>
        </>
        
    )
}

export default TerminalBox