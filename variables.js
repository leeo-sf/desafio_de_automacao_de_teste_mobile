import { assert } from "chai";
import LoginScreen from "./screen/login/login.screen";
import MenuScreen from "./screen/menu/menu.screen";

export const assertChai = assert;
export const loginScreen = new LoginScreen().getLoginScreen();
export const menuScreen = new MenuScreen().getLoginScreen();