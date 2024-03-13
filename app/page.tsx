import { ChatWindow } from "@/components/ChatWindow";
import { BackgroundBeams } from "@/components/ui/background/background-beams";

export default function Home() {
  const InfoCard = (
    <div className="p-4 md:p-8 w-full max-h-[85%] ">
      <h1 className="relative p-2 z-10 text-7xl bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-500 to-cyan-500  text-center font-sans font-bold">
        🦜🔗 LangChain StoryMaker
      </h1>
    </div>
  );
  return (
    <div className="h-screen w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className="w-3/4 mx-auto z-50">
        <ChatWindow
          endpoint="api/chat"
          emoji="🦜"
          titleText="Ruro StoryMaker"
          placeholder="Soy Ruro! un LLM que finge ser un creador de historias! ¿De qué trata tu historia?"
          emptyStateComponent={InfoCard}
        ></ChatWindow>
      </div>

      <BackgroundBeams />
    </div>
  );
}
