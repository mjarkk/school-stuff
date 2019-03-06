#[derive(Debug)]
enum OptionalI32 {
    AnI32(i32),
    Nothing,
}

fn main() {
    // Numbers
    let x: i32 = 1;

    let y: i32 = 13i32;
    let f: f64 = 1.3f64;

    let _implict_x = 1;
    let _implict_f = 1.3;

    let _sum = x + y + 13;

    let mut _mutable = 1;
    _mutable = 4;
    _mutable += 5;

    // Strings
    let x: &str = "Hello world!";
    let y = x.to_string();

    println!("{}, f: {}, x: {}", y, f, x);

    let s: String = "Hello world".to_string();
    let s_slice: &str = &s;

    println!("{} {}", s, s_slice);

    // Vectors/arrays
    let four_ints: [u8; 4] = [1,2,3,4];

    let mut vector: Vec<i32> = vec![1,2,3,4];
    vector.push(5);

    println!("{:?} {:?}", vector, four_ints);

    // Tuples
    let x: (i32, &str, [u8; 2]) = (1, "Test", [1, 2]);
    let (a, _, c) = x;

    println!("{} {} {:?}", a, x.1, c);

    // Types
    struct Point {
        x: u8,
        y: u8,
    }

    let origin = Point {
        x: 1,
        y: 2,
    };
    println!("x: {}, y: {}", origin.x, origin.y);

    struct Point2(u8, u8);
    let origin2 = Point2(4, 44);
    println!("x: {}, y: {}", origin2.0, origin2.1);
    
    enum Direction {
        _Left,
        _Right,
        Up,
        _Down,
    }
    let _up = Direction::Up;

    let two: OptionalI32 = OptionalI32::AnI32(2);
    let _nothing = OptionalI32::Nothing;

    println!("{:?}", two);

    // Generics
    struct Foo<T> {bar: T}
    enum _Optional<T> {
        SomeVal(T),
        NoVal,
    }

    impl<T> Foo<T> {
        fn get_bar(self) -> T {
            self.bar
        }
    }

    let a_foo = Foo {bar: 1};
    println!("{}", a_foo.get_bar());

    // Traits (interfaces)
    trait Frobnicate<T> {
        fn frobnicate(self) -> Option<T>;
    }

    impl<T> Frobnicate<T> for Foo<T> {
        fn frobnicate(self) -> Option<T> {
            Some(self.bar)
        }
    }

    let another_foo = Foo {bar: 1};
    println!("{:?}", another_foo.frobnicate());

    // Matching
    let foo = OptionalI32::AnI32(1);
    match foo {
        OptionalI32::AnI32(n) => println!("It's an i32: {}!", n),
        OptionalI32::Nothing => println!("It's nothing!"),
    }

    struct FooBar {x: i32, y: OptionalI32}
    let bar = FooBar {x: 15, y: OptionalI32::AnI32(32)};
    match bar {
        FooBar{x: 0, y: OptionalI32::AnI32(0)} =>
            println!("The numbers are zero!"),
        FooBar{x: n, y: OptionalI32::AnI32(m)} if n == m =>
            println!("The numbers are the same!"),
        FooBar{x: n, y: OptionalI32::AnI32(m)} =>
            println!("Diffrent numbers: {}, {}", n, m),
        FooBar{x: _, y: OptionalI32::Nothing} =>
            println!("The second number is Nothing!"),
    }
    
    // Control flow
    let arr = [1,2,3];
    for i in arr.iter() {
        print!("{} ", i);
    }
    println!("");

    let arr = 0u8..10;
    for i in arr {
        print!("{} ", i);
    }
    println!("");

    let arr: Vec<u8> = vec![4,5,6,7];
    for i in arr.iter() {
        print!("{} ", i);
    }
    println!("");

    if 1 == 1 {
        println!("lol how is this even working :)");
    } else {
        println!("OOOF");
    }

    let value = if false {
        "Good"
    } else {
        "Not so good"
    };
    println!("{}", value);

    let mut count = 0;
    while count < 1 {
        count += 1;
        println!("This loop is suposed to be visable 1 time, count: {}", count);
    }

    loop {
        println!("{}", "An infinit loop...");
        println!("{}", "or not :)");
        break
    }

    let mut mine: Box<u8> = Box::new(3);
    *mine = 5;

    let mut now_its_mine = mine;
    *now_its_mine += 2;

    println!("now_its_mine has ownership: {}", now_its_mine);
    mine = now_its_mine;
    println!("mine has ownership again: {}", mine);

    let some_var = 3;
    let ref_var: &i32 = &some_var;
    println!("Out: {}, {}", some_var, ref_var);
    
    
}
