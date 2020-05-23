import 'package:arquiteturaflutter/arq/menu/bottom/alpha_bottom_navigation_bar.dart';
import 'package:arquiteturaflutter/home_page/home_page.dart';
import 'package:flutter/material.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
        title: 'Arquitetura',
        theme: ThemeData(
          primarySwatch: Colors.blue,
        ),
        home: Scaffold(
          appBar: AppBar(
            title: Text("Arquitetura"),
          ),
          body: MyHomePage(),
          bottomNavigationBar: AlphaBottomNavigationBar(),
        ) // This trailing comma makes auto-formatting nicer for build methods.
    );
  }
}
