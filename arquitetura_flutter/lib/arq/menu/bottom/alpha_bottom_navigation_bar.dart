import 'package:flutter/material.dart';

class AlphaBottomNavigationBar extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return new BottomNavigationBar(
      items: [
        BottomNavigationBarItem(title: Text("socio 1"), icon: Text("Cocrete")),
        BottomNavigationBarItem(title: Text("socio 2"), icon: Text("Guilherme")),
        BottomNavigationBarItem(title: Text("socio 3"), icon: Text("???")),
      ],
    );
  }
}
