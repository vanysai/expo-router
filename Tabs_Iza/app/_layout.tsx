import { Tabs } from "expo-router";
import Icon from 'react-native-vector-icons/Feather';

export default function AppLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          href: '/',
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="TelaA"
        options={{
          href: 'TelaA',
          tabBarIcon: ({ color, size }) => (
            <Icon name="code" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="TelaB"
        options={{
          href: 'TelaB',
          tabBarIcon: ({ color, size }) => (
            <Icon name="code" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="TelaC"
        options={{
          href: 'TelaC',
          tabBarIcon: ({ color, size }) => (
            <Icon name="code" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="Cadastro"
        options={{
          href: 'Cadastro',
          tabBarIcon: ({ color, size }) => (
            <Icon name="star" color={color} size={size} />
          ),
        }}
      />
    </Tabs>
  );
}
