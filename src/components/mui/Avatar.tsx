import MuiAvatar, { AvatarProps as MuiAvatarProps } from "@mui/material/Avatar";

interface AvatarProps extends MuiAvatarProps {
  size?: number;
}

const Avatar: React.FC<AvatarProps> = ({
  src,
  alt = "avatar",
  size = 40,
  ...props
}) => {
  return (
    <MuiAvatar
      src={src}
      alt={alt}
      sx={{ width: size, height: size, ...props.sx }} // Merge custom sx with size
      {...props}
    />
  );
};

export default Avatar;
