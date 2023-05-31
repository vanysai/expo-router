import { Drawer } from "expo-router/drawer";

export default function AppLayout() {
  return (
    <Drawer>
    <Drawer.Screen
      name="index" // This is the name of the page and must match the url from root
      options={{
        drawerLabel: "Home",
        title: "Principal",
      }}
    />
    <Drawer.Screen
      name="TelaA" // This is the name of the page and must match the url from root
      options={{
        drawerLabel: "Tela A",
        title: "Bem vindo a Tela A",
        drawerItemStyle: { height: 0 }
      }}
    />
    <Drawer.Screen
      name="TelaB" // This is the name of the page and must match the url from root
      options={{
        drawerLabel: "Tela B",
        title: "Bem vindo a Tela B",
      }}
    />
  </Drawer>
  );
}