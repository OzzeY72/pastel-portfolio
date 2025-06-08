import TaskbarButton from "./TaskbarButton";

type TaskbarProps = {
  children: React.ReactNode;
};

export default function Taskbar({children }: TaskbarProps) { 
  return (
    <footer
      className="h-[25] absolute bottom-0 left-0 right-0 flex items-center gap-2 px-[2px] py-1 text-[16px] leading-none bg-pastel-100 text-text-dark font-wcmd tracking-[-0.04em]"
    >
        <TaskbarButton
            label="Start"
            icon='/src/assets/png/start.png'
            to=''
        />
        {children}
    </footer>
  );
}
