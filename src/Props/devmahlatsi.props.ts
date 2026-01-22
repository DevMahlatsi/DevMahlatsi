export  interface  readerProps {
  isOpen: boolean;
}
export interface updateProps {
  onToggle: () => void;
  currentValue: boolean;
}
export interface skillsProps{
  id: number;
  icon: string;
  title: string;
  description : string[];
}