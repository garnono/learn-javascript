/**
 * 基础知识点
 * 
 * TODO：需要脚本，通过解析注释，生成 知识树，便于整体概览
 *  支持多级标题：@h1
 *  支持标题下的描述——阐述该知识点下注意的内容 @desc
 *  支持链接，便于查看对应文档 @link[]()
 */

// 打印测试的主题
function showTitle(title) {
    console.log(`-------------------------------- ${title} ---------------------------------`)
}

function showSubTitle(title) {
    console.log(`--------------- ${title} ---------------------------------`)
}

// 下面每个主题使用{}的目的是便于收缩查看代码，可以去掉

/** ------------------------------------------------------------------------------------------- **/
showTitle('常量'); {
    // const ES2015
    // 1、同一作用域下不能重复声明
    const PI = 3.14
        // const PI = 3.14  // 报错
    console.log(PI); // 3.14 
    {
        const PI = 3.1415 // 子域内声明覆盖了外部的
            // PI = 3.14 //  但不能修改
        console.log(PI) // 3.1415
    }
    console.log(PI) // 3.14

    // 2、栈中的数据不能便，但堆中的可以便——即引用类型的值是可以变动的，但基本类型的值存有栈中，是不能变的
    const obj = {
        value: 1
    }
    obj.value = 2
    console.log(obj.value)
        // obj = {} // 报错，因为栈中的内容变动了

}
/** ------------------------------------------------------------------------------------------- **/
showTitle('变量'); {
    // let ES2015
    // 1、重复声明：同一作用域内，var 可以重复声明，let 不能
    var v1 = 123
    var v1 = 12
    let v2 = 123
        // let v2 = 12 // 报错

    // 2、作用域：var 可以向外扩展，即当前文件的全局对象下；let 不能
    {
        // 都可以延伸到子域下
        console.log(v1)
        console.log(v2)
        var v3 = 123
        let v4 = 123 // 作用域仅在内部，外部不存在
    }
    console.log(v3)
        // console.log(v4) // 块内的声明，不能用于块外

    // 3、var 绑定到了全局对象；let 没有
    console.log(this.v1) // 12
    console.log(this.v2) // undefined

    // 4、变量提升
    console.log(v5) // undefined
        // console.log(v6) // 报错
    var v5 = 5
    let v6 = 6
}



/** ------------------------------------------------------------------------------------------- **/
showTitle('数据类型')

let str = 'abc'
console.log(str.length) // 基础类型，均提供了与之对应的对象，操作时会自动创建和销毁，如String对象

/** ------------------------------------------------------------------------------------------- **/
showTitle('数据类型：Boolean'); {
    // 1、运算: ||、&& 是，返回不一定是boolean值
    console.log(!(1 > 2 || 2 < 3)) // false
    console.log(([] || 2 < 3)) // Array[]——非 boolean

    // 2、类型转换
    console.log(!!3) // 通过 !! 可以进行转化
    console.log(Boolean([])) // true
    console.log(Boolean({})) // true
    console.log(Boolean('')) // false
    console.log(Boolean(0)) // false
    console.log(Boolean(undefined)) // false
    console.log(Boolean(null)) // false
    console.log(Boolean(NaN)) // false
}

/** ------------------------------------------------------------------------------------------- **/
showTitle('数据类型：Null'); {
    // 人为重置位空对象，而非原始的值，与 undefined 相对
    console.log(typeof null) // object
}

/** ------------------------------------------------------------------------------------------- **/
showTitle('数据类型：Undefined'); {
    // 原始的值，而非人为设置的，与 null 相对
    console.log(typeof undefined) // undefined
        // 1、未赋值的变量
    let u1
    console.log(u1) // undefined

    // 2、对象中不存在的属性
    const u2 = {}
    console.log(u2.uu) // undefined

    // 3、未传递实参
    function u3(uu) {
        console.log(uu) // undefined
    }
    u3()

    // void 求值
    console.log(void 1) // undefined
}

/** ------------------------------------------------------------------------------------------- **/
showTitle('数据类型：Number'); {
    // 1、存储结构：IEEE754的64位——1位符号+11位指数+52位小数
    console.log(0.1)

    // 2、精度：超过精度范围 or 小数 的表示于运算，和实际的存在不同
    console.log(0.1 + 0.2) // 0.30000000000000004 

    // 3、数值的范围等可从Number对性中获取
    showSubTitle('Number 属性')
    console.log(Number.MAX_VALUE)
    console.log(Number.MIN_VALUE)
    console.log(Number.MAX_SAFE_INTEGER) // SAFE 表示精度范围
    console.log(Number.MIN_SAFE_INTEGER)

    // 4、NaNmn：Not-a-Number，非数字，全局属性，于Number.NaN 表示含义相同
    console.log(NaN == Number.NaN) // false

    // 5、对于超出范围的值，返回是错误的内容
    console.log(Number.MAX_VALUE + 1 == Number.MAX_VALUE) // true
    console.log(Number.MIN_VALUE - 3e-324) // 0

    // 6、类型转换
    showSubTitle('类型转换')
    let n1 = '-2.14' // 整体可表示为数字
    let n2 = '-2.14abc' // 部分可表示为数字
    let n3 = '-2e4' // 浮点方式
    let n4 = '0x12' // 16进制

    function changeToNumber(num) {
        console.log(Number(num)) // 整体转换——全部可以表示为数字时，才会返回
        console.log(parseInt(num)) // 部分转换，返回整数
        console.log(parseFloat(num)) // 部分转换，返回浮点数
    }
    console.log('...... 整体的 ......')
    changeToNumber(n1)
    console.log('...... 部分的 ......')
    changeToNumber(n2)
    console.log('...... 浮点的 ......')
    changeToNumber(n3)
    console.log('...... 16进制 ......')
    changeToNumber(n4)

    // 其他类型转换
    showSubTitle('其他类型转换')
    console.log(Number(true)) // true => 1；false => 0；
    console.log(Number(null)) // 0
    console.log(Number(undefined)) // NaN
    console.log(Number(NaN)) // NaN
    console.log(Number('-3.12')) // 对于字符传，能直接转换的则转换，否则，按照下面的顺序进行
    console.log(Number('-2e3')) // 浮点格式
    console.log(Number('0x12')) // 16进制会转化为10进制返回
    console.log(Number('hello')) // 空转换为0，否则，都返回 NaN
}

/** ------------------------------------------------------------------------------------------- **/
showTitle('数据类型：String'); {
    // 每个字符用unicode16位字符表示，最长65535个字符

    // 1、操作：字符
    let s1 = '你好阿'
    console.log(s1.charCodeAt(1)) // 第二个字符 unicode 编码 
    console.log(s1.charAt(1)) // 第二个字符的内容
    console.log(String.fromCharCode(s1.charCodeAt(1))) // 根据字符编码获取字符内容

    // 2、操作：字符串
    let s2 = 'abcdefgabcabc'

    // 截取字符串：三者的参数不同
    console.log(s2.substr(2, 4))
    console.log(s2.substring(2, 4))
    console.log(s2.slice(2, 4))

    // 替换
    let s3 = 'abcABCabcABCabcD'
    console.log(s3.replace('ab', 'de'))

    // 检索
    console.log(s2.indexOf('ab', 8)) // 从指定位置开始查找
    console.log(s2.lastIndexOf('ab')) // 返回最后一个匹配的位置

    // 大小写转换  
    console.log(s3.toLowerCase())
    console.log(s3.toUpperCase())

    // 匹配
    console.log(s3.match(/bc/g)) //返回匹配的数组
    console.log(s3.search('c')) // 查找：返回第一个的下标
    console.log(s3.search(/C/i)) // 查找：正则匹配，忽略大小写（i）

    // 分割
    console.log(s3.split('b', 2)) // 分割为数组，指定返回2个——支持正则

    // 6、操作：其他
}

/** ------------------------------------------------------------------------------------------- **/
showTitle('数据类型：Symbol'); {
    // 用于避免 对象重复属性 覆盖问题

    let sy1 = Symbol('descrpition') // 参数仅作为描述，返回内容可以理解为生成的随机数
    let sy2 = Symbol('descrpition')
    console.log(sy1, sy2, sy1 == sy2)

    // 对象属性操作用[]
    const p = {}
    p[sy1] = 'hi'
    p.sy1 = 'hehe' // 点后认为是字符串，而非 变量

    let sy3 = Symbol.for('sy3') // 通过参数，可以找到之前的值
    console.log(sy3 === Symbol.for('sy3')) // true

}

/** ------------------------------------------------------------------------------------------- **/
showTitle('数据类型：Object'); {
    let o1 = {
        name: 'obj'
    }

    // 1、引用传递
    showSubTitle('1、引用传递')
    let o2 = o1
    o2.name = 'new'
    console.log(o1.name)

    // 2、拷贝
    showSubTitle('2、拷贝')
    let o3 = {
        name: 'obj',
        obj: {
            new: 'new'
        }
    }

    let o4 = Object.assign({}, o3) // ES6 只拷贝一级
    let o5 = JSON.parse(JSON.stringify(o3)) // 多级拷贝
    o3.name = 'name'
    o3.obj.new = 'other'
    console.log(o4)
    console.log(o5)

    // 3、属性
    showSubTitle('3、属性：数据')
    let o6 = { 'def': '' }
    Object.defineProperty(o6, 'name', {
        value: 'JS',
        writable: false, // 不能修改
        enumerable: false, // 不能for in 读取
        configurable: false, // 不能删除
    })
    Object.defineProperty(o6, 'age', {
        value: 20,
        writable: true,
        enumerable: true,
        configurable: true,
    })
    Object.defineProperty(o6, 'def', {}) // 默认：对象中设置了该属性，则均为true；否则，均为false，即：不能该，不能读，不能删
    console.log("默认：", o6)
    o6.name = 'Javascript'
    o6.age = 30
    o6.def = 'def'
    console.log("修改：", o6)
    for (let k in o6) {
        console.log("读取：", k, ' = ', o6[k])
    }
    delete(o6.name)
    delete(o6.age)
    delete(o6.def)
    console.log("删除：", o6)

    showSubTitle('3、属性：访问')
    let o7 = {
        '_name': '' // 必须先定义，才能用 Object.defineProperty处理，且不能与其存在重名的属性
    }
    Object.defineProperty(o7, 'name', {
        enumerable: true, // 默认 false
        configurable: true, // 默认 false
        get: function() {
            return this._name + "--tail"
        },
        set: function(value) {
            this._name = "set:" + value
        }
    })
    o7.name = 'new'
    console.log(o7.name)
    console.log(o7._name)
    for (let k in o7) {
        console.log('读取：', k, ' = ', o7[k])
    }
    delete(o7.name)
    console.log("删除：", o7.name)

    // 3、原型链——继承——具体参看“继承”的示例
    showSubTitle('3、原型链')
        // 符合继承的特性，通过 prototype 进行对象的引用
    let o8 = { name: 'JS', age: 20, cate: { name: 'lang' } }
    let o9 = Object.create(o8)
    o8.name = 'Javascript'
    o8.cate.name = 'other'
    o9.new = 'hi'
    console.log(o8)
    console.log(o9)
    console.log(o9.prototype == o8) // false

    // 4、其他操作
    showSubTitle('其他操作')
    Object.defineProperty(o9, 'def', {
        enumerable: false,
        value: 'def'
    })
    console.log(Object.getOwnPropertyDescriptor(o9, 'name')) // undefined
    console.log(Object.getOwnPropertyDescriptor(o9, 'new')) // 获取 defineProperty 方法（包括对象中直接定义的）设置的 property 特性

    console.log(Object.getOwnPropertyNames(o9)) // 获取所有的属性名，不包括 prototy 中的属性，返回一个数组
    console.log(Object.keys(o9)) // 获取所有的可枚举的属性

    let o10 = { name: 'JS', age: 10 }
    Object.preventExtensions(o10) // 不能添加新属性，但可以修改 和 删除
    o10.add = 'add'
    o10.name = 'Javascript'
    delete(o10.age)
    console.log(o10)

    let o11 = { name: 'JS', age: 11 }
    Object.seal(o11) // 不能添加、删除，可以修改属性
    o11.add = 'add'
    o11.name = 'Javascript'
    delete(o11.age)
    console.log(o11)


    let o12 = { name: 'JS', age: 12 }
    Object.freeze(o12) // 不能添加、删除、修改属性
    o12.add = 'add'
    o12.name = 'Javascript'
    delete(o12.age)
    console.log(o12)
}

/** ------------------------------------------------------------------------------------------- **/
showTitle('运算符：算术'); {
    // 加+、减=、乘*、除/、取余%、递加++、递减--
    // 用于 String：+用于字符串链接
    let ss1 = 'abc'
    let ss2 = ss1 + 'def'
    console.log(typeof ss2, ss2)

    // 用于 Number
    let opt_n1 = 8
    let opt_n2 = 3
    console.log(`${opt_n1} + ${opt_n2} = `, opt_n1 + opt_n2)
    console.log(`${opt_n1} - ${opt_n2} = `, opt_n1 - opt_n2)
    console.log(`${opt_n1} * ${opt_n2} = `, opt_n1 * opt_n2)
    console.log(`${opt_n1} / ${opt_n2} = `, opt_n1 / opt_n2)
    console.log(`${opt_n1} % ${opt_n2} = `, opt_n1 % opt_n2)
    console.log(`++${opt_n1} = `, ++opt_n1)
    console.log(`${opt_n1}++ = `, opt_n1++) // 先返回，再加1
    console.log(`--${opt_n2} = `, --opt_n2)
    console.log(`${opt_n2}-- = `, opt_n2--) // 先返回，再减1
}


/** ------------------------------------------------------------------------------------------- **/
showTitle('运算符：赋值'); {
    // =、+=、-=、*=、/=、%=
    // 用于 Number
    let opt_n3 = 3,
        opt_n4 = 4
    console.log(`${opt_n3} += ${opt_n4} => `, opt_n3 += opt_n4)
    console.log(`${opt_n3} -= ${opt_n4} => `, opt_n3 -= opt_n4)
    console.log(`${opt_n3} *= ${opt_n4} => `, opt_n3 *= opt_n4)
    console.log(`${opt_n3} /= ${opt_n4} => `, opt_n3 /= opt_n4)
    console.log(`${opt_n3} %= ${opt_n4} => `, opt_n3 %= opt_n4)
}

/** ------------------------------------------------------------------------------------------- **/
showTitle('运算符：比较'); {
    // ==、===、!=、!==、>、<、>=、<=、?（三元）

    // Object：先判断 valueOf 返回的值，不能进行判断，则判断 toString 返回的内容
    const opt_o1 = {}
    let opt_o2 = opt_o1
    console.log(opt_o1 == {}, opt_o1.valueOf(), {}.valueOf(), opt_o1.toString(), {}.toString()) // false
    console.log(opt_o2 === opt_o1) // true 两者引用的时同一个对象
    console.log(opt_o1.valueOf() === opt_o2.valueOf()) // true
    console.log(opt_o1.toString() === opt_o2.toString()) // true
    console.log({} == {}) // false，对象都不相等


    // String
    console.log('1' == 1) // true
    console.log('1' === 1) // fasle

    // Number

    // Boolean
    console.log(true > false) // true

    // 三元
    console.log(opt_o1 ? 0 : 1) // 0
}

/** ------------------------------------------------------------------------------------------- **/
showTitle('运算符：逻辑'); {
    // &&、||、!
    // &&、|| 返回的不一定是 boolean 类型
    console.log([] || 1) // array
    console.log({} && []) // array

}

/** ------------------------------------------------------------------------------------------- **/
showTitle('运算符：位'); {
    //先转化位32位有符号，再转化位64位：&、|、~、^、<<、>>、>>>
    let opt_b1 = 10, // 二进制：0...0 1010
        opt_b2 = 12 //  二进制：0...0 1100
    console.log(`${opt_b1} & ${opt_b2}: `, opt_b1 & opt_b2) // 二进制：0...0 1000 =》2^3 = 8
    console.log(`${opt_b1} | ${opt_b2}: `, opt_b1 | opt_b2) // 二进制：0...0 1110 =》2^3 + 2^2 + 2^1 = 14
    console.log(`~${opt_b1}           : `, ~opt_b1) // 二进制：1...1 0101 =》- + (-1) + 取反 =》- 0...0 1011 => -1 * (2^3 + 2^1 + 2^0) = -11
    console.log(`${opt_b1} ^ ${opt_b2}: `, opt_b1 ^ opt_b2) // 二进制：0...0 0110 =》2^2 + 2^1 = 6
    console.log(`${opt_b1} << 2`, opt_b1 << 2) // 二进制：(00)0...0 1010(00) =》0...0 101000 => 2^5 + 2^3 = 32 + 8 = 40 =》 左移 n 位 相当于 乘以 2^n

    // 负数二进制：原码（正数）-》反码（10交换）-》补码（+1）
    let opt_b3 = -5 // 二进制：0...0 0101(原码) =》 1...1 1010(反码) =》 1...1 1011(补码 即 负数的二进制表示)
    console.log(`${opt_b3} >> 2`, opt_b3 >> 2) // 二进制：(11)1...1 10(11) =》- + (-1) + 取反 =》- 0...0 0010 =》-1 * (2^1) =》 -2 =》（有符号:整数补0,负数补1）右移 n 相当于 除以 2^n
    console.log(`${opt_b3} >>> 2`, opt_b3 >>> 2) // 二进制：(00)..1 10(11) =》1073741822（无符号即补0）右动

}

/** ------------------------------------------------------------------------------------------- **/
showTitle('运算符：其他'); {
    // typeof：判断数据的类型
    let opt_sy1 = Symbol('opt')
    console.log(typeof(true)) // boolean
    console.log(typeof(1)) // number
    console.log(typeof('')) // string
    console.log(typeof(undefined)) // undefined
    console.log(typeof(null)) // object
    console.log(typeof(opt_sy1)) // symbol
    console.log(typeof({})) // object

    // instanceof：判断实例所属对象
    const OptPeople = function() {}
    let opt_p1 = new OptPeople()
    console.log(opt_p1 instanceof OptPeople) // true

    const opt_p2 = {}
    let opt_p3 = opt_p2
        // console.log(opt_p3 instanceof opt_p2) // opt_p2 需要是 function
}

/** ------------------------------------------------------------------------------------------- **/
showTitle('语句：条件'); {
    let sen_n1 = 1

    // if ... else ...
    if (sen_n1 == 1) {
        console.log('one')
    } else if (sen_n1 == 2) {
        console.log('two')
    } else {
        console.log('other')
    }

    // switch ... case ...
    switch (sen_n1) {
        case 1:
            console.log('one')
            break;
        case 2:
            console.log('two')
            break;
        default:
            console.log('other')
    }
}

/** ------------------------------------------------------------------------------------------- **/
showTitle('语句：循环'); {

    // for 
    for (let i = 0; i < 3; i++) {
        console.log("for ...: ", i)
    }

    let loop_o1 = { name: "JS", age: 20 }
    for (let k in loop_o1) {
        console.log("for ... in ... : ", k, ' = ', loop_o1[k])
    }

    let loop_o2 = ['JS', 'NODE']
    for (let v of loop_o2) { // loop_o2 是具有可迭代属性的对象，例如数组、字符串、映射、节点列表等
        console.log('for ... of ... : ', v)
    }

    // do .. while ...
    let condition = true
    let loop_c1 = 0
    do {
        console.log("do...while...: ", loop_c1)
        loop_c1++
        if (loop_c1 > 3) {
            condition = false
        }

    } while (condition)

}

/** ------------------------------------------------------------------------------------------- **/
showTitle('语句：其他'); {
    // break
    for (let i = 0; i < 5; i++) {
        break_tag: for (let j = 0; j < 5; j++) {
            if (i == 3) {
                break //  不会输出 i = 3 的数据
            }
            if (j == 3) {
                break break_tag // 不会输出 j >= 3 的数据 
            }
            console.log(`break : i = ${i}; j = ${j}`)
        }
    }

    // continue
    continue_tag: for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
            if (j == 2) {
                continue //  不会输出 j = 2 的数据
            }
            if (j == 3) {
                continue continue_tag // 不会输出 j >= 3 的数据
            }
            console.log(`continue : i = ${i}; j = ${j}`)
        }
    }

}

/** ------------------------------------------------------------------------------------------- **/
showTitle('面向对象：方法'); {
    // 不定参数
    function f1(a, b, ...args) {
        console.log(a, b, args)
        return a + b
    }
    f1(1, 2, 3, 4, 5)

    // 回调
    function f2(f_sum, a, b) {
        return f_sum(a, b)
    }

    function sum(a, b) {
        return a + b
    }
    console.log("回调 : ", f2(sum, 2, 3))

    // 匿名——场景：事件、对象中
    /**
     * 下面三种情况存在一些约束，有些地方需要明确的分号
     * 具体有哪些情况待整理——TODO
     * 可参考：https://www.cnblogs.com/mouseleo/p/9175897.html
     *      简单总结：以(、[ 开头的行，之前需要加上分号
     */
    const f3 = function(...args) { // 完全不定的参数
        console.log('no name 1 ... ', args)
    }
    f3('aaa', 'bbb'); // 分号不能少

    ;
    (function() { // (之前加上分号，避免其他人忘记
        // 匿名且没有被调用——好像没什么作用
    }); // 分号不能少

    // 匿名直接调用
    (function(a, b) {
        console.log('no name 2 ...', a, b)
    })(11, 22)

    // 箭头函数
    const fp = {
        name: 'hello',
        hello: function() {
            this.age = 5
            console.log("普通：", this.name, "---", this.age, this)
                // console.log(this.f1(1, 2)) // f1 未定义
        },
        hi: () => { // 缩小了this的作用范围——仅在内部有效
            this.age = 10
            console.log("箭头：", this.name, "---", this.age, this)
            console.log(this.f1(1, 2)) // 注意：这个居然成功了！！！——TODO
        }
    }
    fp.hello()
    fp.hi()

}

/** ------------------------------------------------------------------------------------------- **/
showTitle('面向对象：模块'); {

}

/** ------------------------------------------------------------------------------------------- **/
showTitle('面向对象：类'); {
    class A {
        constructor() {
            console.log('A...')
        }
    }

    // 相当于上面的 class A，A1本身等同于类的构造函数
    function A1() {
        console.log('A1...')
    }
    let a0 = new A()
    let a1 = new A1()

    class B extends A { // 通过 extends 继承 A，但不能多继承
        constructor(name) {
            super() // 调用父类的构造函数
            this.name = name
            console.log("B...", this.name)
        }
        getname() {
            return this.name
        }
    }

    const B1 = {
        name: "",
        constructor: function(name) {
            this.name = name
            console.log("B1...", this.name)
        },
        getname: function() {
            return this.name
        }
    }
    B1.prototype = new A1()

    let b0 = new B('B0')
    let b1 = B1
    b1.constructor('B1')
    console.log("B... : ", b0.getname(), b1.getname())

    class C extends B {
        constructor(name, age) {
            super(name)
            this._age = age
            console.log("C...", this.name, '---', this._age)
        }
        getage() {
            return this._age
        }

        // set、get 设置、获取对象实例的属性：名称与对象属性的名称不能重复
        set age(age) {
            this._age = age
            console.log('C... set age = ', this._age)
        }
        get age() {
            console.log('C... get age = ', this._age)
            return this._age
        }

        // 静态方法
        static getClassName() {
            return 'C'
        }
    }

    let c1 = new C('CC', 12)
    console.log('C... : ', c1.getname(), c1.getage())

    // test: set、get
    c1.age = 15
    c1.age

    // test：static
    console.log("C static func...", C.getClassName())

    class D {
        constructor(name) {
            this.name = name
        }

        getName() {
            return this.name
        }
    }

    // 等同于上面的 class D
    const D1 = {
        name: '',
        constructor: function(name) {
            this.name = name
        },
        getName: function() {
            return this.name
        }
    }

    let d0 = new D('D0')
    let d1 = D1
    d1.constructor('D1')
    console.log("D... : ", d0.getName(), d1.getName())
}


/** ------------------------------------------------------------------------------------------- **/
showTitle('继承'); {
    /**
     * 继承——属性、方法；
     *  JS中只有公共方法，对于私有方法需要依靠约定来处理，比如，以下划线开头的最为私有属性或方法
     *  实现方式
     *      1. 原型链：通过 __proto__、prototype、prototype.constructo 共同实现
     *      2. Node的unit.inherits
     *      3. ES6 提供的 类 
     */

    /**
     * 原型链
     * 1. __proto__ 对象均有的属性，其默认指向 原型的.prototype属性，但要注意是哪个原型
     * 2. prototype属性，独属于方法，其上关联定义该方法的属性和方法——嵌套定义方法
     * 3. prototype.constructor 属性指向当前方法的实例化方法——默认指向了当前方法，当然，也可以修改
     */

    //测试点一：仅声明，不初始化，是没有 __proto__ 属性的
    let lc1
        // console.log('lc1 __proto__: ', lc1.__proto__) // 没有继承的原型

    let lc2 = ''
    console.log(lc2.__proto__ === String.prototype) // true
    console.log(String.__proto__ === Object.prototype) // false

    /**
     * 测试点二：原型链继承
     * 注意：
     *  1、箭头函数中 this，仅是指当前箭头函数本身
     *  2、通过设置 prototype 属性，指定继承的对象
     *  3、prototype.constructor 默认是当前的方法，但也可以修改为其他的内容
     *  4、调用继承的对象的方法方式——即调用父对象的（构造）方法
     *  5、__proto__ 也可修改，多层继承是，其真正的指向是什么
     */
    function L1() {
        if (!this.name) {
            this.name = 'L1'
        }
        if (!this.age) {
            this.age = 100
        }
        console.log('init ... ', this.name)
        this.consoleName1()
        this.consoleName2()
    }
    L1.prototype.constructor = function() {
        console.log('L1 constructor function') // 修改constructor的定义
    }
    L1.prototype.consoleName1 = () => {
        console.log('init ... in 箭头：', this.name) // this 是指当前方法——consoleName1，所以，name为undefined
    }
    L1.prototype.consoleName2 = function() {
        console.log('init ... in function: ', this.name) // this 是指当前对象——L1，所以 name 为‘L1’
    }

    function L2() {
        this.name = 'L2'
        console.log("直接调用原型的方法：")
        this.consoleName2()

        console.log('通过 prototype 属性调用：')
        L1.prototype.consoleName2.call(this)
        L1.prototype.consoleName2(this) // 不使用call，无法获取到当前对象的属性

        console.log('通过call直接调用L1对象：')
        L1.call(this)

        console.log('通过constructor直接调用L1对象：')
        L1.prototype.constructor.call(this) // 调用修改后的constructor

        console.log('直接实例化L1：')
        new L1() // 无法获取当前对象的属性
    }
    L2.prototype = new L1()
    let l = new L2()
    console.log(l.__proto__ === L2.prototype) //true
    console.log(L2.__proto__ === Function.prototype) //true
    console.log(L1.__proto__ === Function.prototype) //true
    L2.__proto__ = L1.prototype
    console.log(L2.__proto__ === Function.prototype) //false，因为修改了
    console.log(l.age) // L2——修改了L2.__proto__ ，并没有影响原型链

    // 测试点三：node 的util.inherits 方式
    // console.log('util.inherits -----------------------------------------------')
    // const util = require('util')

    // function U1() {
    //     if (!this.name) {
    //         this.name = 'U1'
    //     }
    //     this.age = 80
    //     console.log('init ... in U1: ', this.name)
    // }
    // U1.prototype.name = 'UUU1'
    // U1.prototype.consoleName = function() {
    //     console.log('console name ... ', this.name)
    // }


    // function U2() {
    //     this.name = 'U2'
    //     console.log('init ... in U2: ', this.name)
    //     U1.call(this) // 继承父对象的属性
    // }
    // util.inherits(U2, U1) // 继承父对象的方法
    // let u = new U2()
    // console.log('u name = ', u.name)
    // console.log('u age = ', u.age)
    // u.consoleName()
    // console.log(u.__proto__ === U2.prototype) // true
    // console.log(U2.__proto__ === Function.prototype) // true

    /**
     * 测试点三：类
     *  原型链的方法，相当于类的构造函数
     *  __proto__ 多层级默认指向 与 直接原型链有所不同
     */
    class C1 {

        constructor() {
            if (!this.name) {
                this.name = 'C1'
            }
            this.age = 60
            console.log('init ... in C1:', this.name)
        }

        consoleName() {
            console.log('console name ... ', this.name)
        }
    }

    class C2 extends C1 {
        constructor() {
            super() // 调用父类构造函数
            this.nane = 'C2' // 需要在 super 方法后调用，不能修改 父类中的值
        }
    }
    let c = new C2()
    console.log('c name = ', c.name)
    console.log('c age = ', c.age)
    console.log(c.__proto__ === C2.prototype) // true
    console.log(C2.prototype.constructor === C2) // true
    console.log(C2.__proto__ === C1) //true
    console.log(C1.__proto__ === Function.prototype) // true
}

/** ------------------------------------------------------------------------------------------- **/
showTitle('其他')