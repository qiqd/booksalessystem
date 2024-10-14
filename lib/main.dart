import 'dart:math';

import 'package:flutter/material.dart';

void main() {
  runApp(MaterialApp(
      home: Scaffold(
          appBar: AppBar(
              title: const Text("appbar"),
              centerTitle: true,
              titleTextStyle:
                  const TextStyle(fontSize: 10, color: Colors.blue)),
          body: const SizedBox(child: MyButtom()))));
}

class MyList extends StatelessWidget {
  const MyList({super.key});

  @override
  Widget build(BuildContext context) {
    return ListView.builder(
      itemCount: 10,
      itemBuilder: (context, index) {
        return ListTile(
          title: Text("index:$index"),
        );
      },
    );
  }
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});
  @override
  Widget build(BuildContext context) {
    return const Center(
      child: Text(
        "我是一个文本容",
        textDirection: TextDirection.ltr,
      ),
    );
  }
}

class HomeWidget extends StatelessWidget {
  const HomeWidget({super.key});

  @override
  Widget build(BuildContext context) {
    return const Center(
      child: Text("center box"),
    );
  }
}

class MyImage extends StatelessWidget {
  const MyImage({super.key});

  @override
  Widget build(BuildContext context) {
    return SizedBox(
        width: 500,
        height: 400,
        child: Image.asset(
          "images/qi.jpg",
          height: 600,
          width: 300,
        ));
  }
}

class MyButtom extends StatelessWidget {
  const MyButtom({super.key});

  @override
  Widget build(BuildContext context) {
    return SizedBox(
        height: 500,
        width: 700,
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Expanded(
              flex: 1,
              child: ElevatedButton(
                // ignore: avoid_print
                onPressed: () {},
                style: const ButtonStyle(
                    side: WidgetStatePropertyAll(
                        BorderSide(color: Colors.red, width: 5)),
                    backgroundColor:
                        WidgetStatePropertyAll(Colors.indigoAccent)),
                child: const Text("按钮"),
              ),
            ),
            const Expanded(
              flex: 1,
              child: SizedBox(
                height: 200,
                width: 700,
                child: ListTile(
                  title: Text("tile"),
                  subtitle: Text("subtile"),
                  leading: Icon(Icons.add),
                ),
              ),
            )
          ],
        ));
  }
}
