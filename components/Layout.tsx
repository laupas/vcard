import { useTheme, Text } from "@nextui-org/react";
import { Card } from "@nextui-org/react";

export default function Layout(props: any) {
  const { theme } = useTheme();

  return (
    <div
      style={{
        color: theme.colors.primary.value,
        backgroundColor: theme.colors.accents1.value,
        fontSize: theme.fontSizes.tiny.value,
        padding: `${theme.space[2].value} ${theme.space[4].value}`,
      }}
    >
      {props.children}
    </div>
  );
}
