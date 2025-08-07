import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send } from "lucide-react";

interface ChatInputProps {
  onSendMessage: (message: string) => void;
  disabled?: boolean;
  inputRef?: React.Ref<HTMLInputElement>;
  onFocus?: React.FocusEventHandler<HTMLInputElement>;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
}

const ChatInput = ({ onSendMessage, disabled, inputRef, onFocus, onBlur }: ChatInputProps) => {
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim() && !disabled) {
      onSendMessage(message.trim());
      setMessage("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-3">
      <Input
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type your travel question..."
        disabled={disabled}
        className="flex-1 glass border-white/30 bg-white/50 text-foreground placeholder:text-black/50 focus:ring-primary/50 h-12"
        ref={inputRef}
        onFocus={onFocus}
        onBlur={onBlur}
      />
      <Button
        type="submit"
        disabled={!message.trim() || disabled}
        size="icon"
        className="bg-primary hover:bg-primary/90 text-primary-foreground shrink-0 h-12 w-12"
      >
        <Send size={18} />
      </Button>
    </form>
  );
};

export default ChatInput;