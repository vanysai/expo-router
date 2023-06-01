import { Drawer } from "expo-router/drawer";
import  Icon  from "react-native-vector-icons/Feather";

export default function AppLayout() {
  return (
    <Drawer>
      <Drawer.Screen
        name="index"
        options={{
          drawerLabel: "Home",
          title: "Principal",
          drawerItemStyle: { height: 0 },
          drawerIcon: ({ color, size }) => (
            <Icon name="home" color={color} size={size} />
          )
        }}
      />
      <Drawer.Screen
        name="TelaA"
        options={{
          drawerLabel: "Tela A",
          title: "Bem-vindo à Tela A",
          drawerItemStyle: { height: 0 },
          drawerIcon: ({ color, size }) => (
            <Icon name="corner-down-right" color={color} size={size} />
          )
        }}
      />
      <Drawer.Screen
        name="TelaB"
        options={{
          drawerLabel: "Tela B",
          title: "Bem-vindo à Tela B",
          drawerItemStyle: { height: 0 },
          drawerIcon: ({ color, size }) => (
            <Icon name="corner-down-right" color={color} size={size} />
          )
        }}
      />
      <Drawer.Screen
        name="TelaC"
        options={{
          drawerLabel: "Tela C",
          title: "Bem-vindo à Tela C",
          drawerIcon: ({ color, size }) => (
            <Icon name="corner-down-right" color={color} size={size} />
          )
        }}
      />
      <Drawer.Screen
        name="TelaD"
        options={{
          drawerLabel: "Cadastro",
          title: "Bem-vindo à Tela de Cadastro",
          drawerIcon: ({ color, size }) => (
            <Icon name="corner-down-right" color={color} size={size} />
          )
        }}
      />
    </Drawer>
  );
}