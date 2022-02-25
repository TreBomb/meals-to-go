import styled from "styled-components/native";
import {
  Avatar,
  TextInput,
  Button,
  ActivityIndicator,
} from "react-native-paper";
import { colors } from "../infrastructure/theme/colors";

export const CartIconContainer = styled.View`
  align-items: center;
  justify-content: center;
  flex: 1;
`;

export const CartIcon = styled(Avatar.Icon).attrs({
  size: 128,
})`
  background-color: tomato;
`;

export const NameInput = styled(TextInput)`
  margin: ${(props) => props.theme.space[3]};
`;

export const PayButton = styled(Button).attrs({
  color: colors.brand.primary,
})`
  width: 80%;
  align-self: center;
  padding: ${(props) => props.theme.space[2]};
`;

export const ClearButton = styled(Button).attrs({
  color: colors.ui.error,
})`
  width: 80%;
  align-self: center;
  padding: ${(props) => props.theme.space[2]};
`;

export const ChechoutStyles = styled(ActivityIndicator).attrs({
  size: 128,
  animating: true,
  color: "tomato",
})`
  position: absolute;
  top: 50%;
  left: 35%;
  z-index: 999;
`;
