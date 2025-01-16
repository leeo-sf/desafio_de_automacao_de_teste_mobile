import { assert } from "chai";
import LoginScreen from "./screen/login/login.screen";
import MenuScreen from "./screen/menu/menu.screen";
import FormsScreen from "./screen/forms/forms.screen";
import DragScreen from "./screen/drag/drag.screen"

export const assertChai = assert;
export const loginScreen = new LoginScreen().getLoginScreen();
export const menuScreen = new MenuScreen().getMenuScreen();
export const formsScreen = new FormsScreen().getFormsScreen();
export const dragScreen = new DragScreen().getDragScreen();