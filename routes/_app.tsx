import { AppProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";
import TerminalBox from "../components/TerminalBox.tsx";
import WindowElement from "../components/Window.tsx";

export default function App({ Component }: AppProps) {
  return (
    <>
      <Head>
        <title>Full Stack Web Developer</title>
        <meta
          name="description"
          content="Full Stack Web Developer, Blockchain nerd and TypeScript enthusiast"
        />
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <script src="https://rawcdn.githack.com/nextapps-de/winbox/0.2.6/dist/winbox.bundle.min.js"></script>
      </Head>
      <div class="flex">
        <div id="page-anchor"></div>
        <div id="main-container" class="max-w-xl my-8 mx-auto lg:mx-2 sm:mx-1 text-sm text-white font-plex leading-none tracking-wide md:my-3">
            <WindowElement/>
            {/* <TerminalBox/> */}
            <Component />
        </div>
      </div>
    </>
  );
}