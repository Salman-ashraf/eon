import { styled } from "@mui/system";
import { TextField, Button } from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import SendIcon from "@src/components/SVGIcons/SendIcon";
import ChatHeader from "./ChatHeader";
import ChatMessage from "./ChatMessage";
import DealSummary from "./DealSummary";

const AiChatComponent = () => {
  const { control, handleSubmit } = useForm();

  const onSubmit = (data: { message: string }) => {
    console.log(data);
  };

  const onClose = () => {
    console.log("close");
  };

  return (
    <ChatContainer>
      <ChatHeader onClose={onClose} />
      <ChatBody>
        <ChatMessage
          text="Welcome! Let me assist you with this deal so you can maximize your earnings."
          time="10:00 am"
          isAi
        />
        <DealSummary />
      </ChatBody>
      <ChatFooter>
        <Controller
          name="message"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <StyledTextField
              {...field}
              fullWidth
              variant="outlined"
              placeholder="Type your message here..."
              InputProps={{
                endAdornment: (
                  <SendButton type="submit">
                    <SendIcon />
                  </SendButton>
                ),
              }}
            />
          )}
        />
      </ChatFooter>
    </ChatContainer>
  );
};

const ChatContainer = styled("section")({
  borderRadius: "24px",
  backgroundColor: "#1b2735",
  boxShadow: "0 6px 24px 0 rgba(0, 0, 0, 0.8)",
  display: "flex",
  maxWidth: "296px",
  flexDirection: "column",
  overflow: "hidden",
});

const ChatBody = styled("main")({
  display: "flex",
  flexDirection: "column",
  padding: "16px",
  flex: 1,
  overflowY: "auto",
});

const ChatFooter = styled("footer")({
  padding: "16px",
});

const StyledTextField = styled(TextField)({
  "& .MuiOutlinedInput-root": {
    backgroundColor: "#eff4fc",
    color: "black",
    borderRadius: "16px",
  },
});

const SendButton = styled(Button)({
  padding: "8px",
  minWidth: "unset",
});

export default AiChatComponent;
