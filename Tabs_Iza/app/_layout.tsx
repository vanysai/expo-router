import { Tabs } from "expo-router";

export default function AppLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        // Name of the route to hide.
        name="index"
            options={{
            // This tab will no longer show up in the tab bar.
            href: '/',
        }}
      />
      <Tabs.Screen
        // Name of the route to hide.
        name="TelaA"
            options={{
            // This tab will no longer show up in the tab bar.
            href: 'TelaA',
        }}
      />
      <Tabs.Screen
        // Name of the route to hide.
        name="TelaB"
            options={{
            // null = tira a referencia do href
            // This tab will no longer show up in the tab bar.
            href: 'TelaB',
        }}
      />
    </Tabs>
  );
}