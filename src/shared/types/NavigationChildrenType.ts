import { StackScreenProps } from "@react-navigation/stack";

export type NavigationChildrenType = (
  data: StackScreenProps<any>
) => JSX.Element;
