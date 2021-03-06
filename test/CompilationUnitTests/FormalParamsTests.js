
    test("intrface formal params", function(assert) {
      var src = multiline(function(){/*
        interface Test {
            void test();
            void test(int a);
            void test(@annotation int a, String b);
            void test(int[] a, @annotation String b[]);
            void test(final int a, final java.lang.String[][][] b[], float c);
            void test(int... f);
            void test(double n, final int[]... g);
            void World(double n, final List<int[]>... g);
        }
      */});
      assert.deepEqual(
        JavaParser.parse(src)
        ,
        {
            node: "CompilationUnit",
            package: null,
            imports: [],
            types: [
                {
                    node: "TypeDeclaration",
                    modifiers: [],
                    interface: true,
                    name: {
                        node: "SimpleName",
                        identifier: "Test"
                    },
                    typeParameters: [],
                    superclassType: null,
                    superInterfaceTypes: [],
                    bodyDeclarations: [
                        {
                            node: "MethodDeclaration",
                            modifiers: [],
                            constructor: false,
                            typeParameters: [],
                            returnType2: {
                                node: "PrimitiveType",
                                primitiveTypeCode: "void"
                            },
                            name: {
                                node: "SimpleName",
                                identifier: "test"
                            },
                            parameters: [],
                            extraDimensions: 0,
                            thrownExceptions: [],
                            body: null
                        },
                        {
                            node: "MethodDeclaration",
                            modifiers: [],
                            constructor: false,
                            typeParameters: [],
                            returnType2: {
                                node: "PrimitiveType",
                                primitiveTypeCode: "void"
                            },
                            name: {
                                node: "SimpleName",
                                identifier: "test"
                            },
                            parameters: [
                                {
                                    node: "SingleVariableDeclaration",
                                    modifiers: [],
                                    type: {
                                        node: "PrimitiveType",
                                        primitiveTypeCode: "int"
                                    },
                                    varargs: false,
                                    name: {
                                        node: "SimpleName",
                                        identifier: "a"
                                    },
                                    extraDimensions: 0,
                                    initializer: null
                                }
                            ],
                            extraDimensions: 0,
                            thrownExceptions: [],
                            body: null
                        },
                        {
                            node: "MethodDeclaration",
                            modifiers: [],
                            constructor: false,
                            typeParameters: [],
                            returnType2: {
                                node: "PrimitiveType",
                                primitiveTypeCode: "void"
                            },
                            name: {
                                node: "SimpleName",
                                identifier: "test"
                            },
                            parameters: [
                                {
                                    node: "SingleVariableDeclaration",
                                    modifiers: [
                                        {
                                            node: "MarkerAnnotation",
                                            typeName: {
                                                node: "SimpleName",
                                                identifier: "annotation"
                                            }
                                        }
                                    ],
                                    type: {
                                        node: "PrimitiveType",
                                        primitiveTypeCode: "int"
                                    },
                                    varargs: false,
                                    name: {
                                        node: "SimpleName",
                                        identifier: "a"
                                    },
                                    extraDimensions: 0,
                                    initializer: null
                                },
                                {
                                    node: "SingleVariableDeclaration",
                                    modifiers: [],
                                    type: {
                                        node: "SimpleType",
                                        name: {
                                            node: "SimpleName",
                                            identifier: "String"
                                        }
                                    },
                                    varargs: false,
                                    name: {
                                        node: "SimpleName",
                                        identifier: "b"
                                    },
                                    extraDimensions: 0,
                                    initializer: null
                                }
                            ],
                            extraDimensions: 0,
                            thrownExceptions: [],
                            body: null
                        },
                        {
                            node: "MethodDeclaration",
                            modifiers: [],
                            constructor: false,
                            typeParameters: [],
                            returnType2: {
                                node: "PrimitiveType",
                                primitiveTypeCode: "void"
                            },
                            name: {
                                node: "SimpleName",
                                identifier: "test"
                            },
                            parameters: [
                                {
                                    node: "SingleVariableDeclaration",
                                    modifiers: [],
                                    type: {
                                        node: "ArrayType",
                                        componentType: {
                                            node: "PrimitiveType",
                                            primitiveTypeCode: "int"
                                        }
                                    },
                                    varargs: false,
                                    name: {
                                        node: "SimpleName",
                                        identifier: "a"
                                    },
                                    extraDimensions: 0,
                                    initializer: null
                                },
                                {
                                    node: "SingleVariableDeclaration",
                                    modifiers: [
                                        {
                                            node: "MarkerAnnotation",
                                            typeName: {
                                                node: "SimpleName",
                                                identifier: "annotation"
                                            }
                                        }
                                    ],
                                    type: {
                                        node: "SimpleType",
                                        name: {
                                            node: "SimpleName",
                                            identifier: "String"
                                        }
                                    },
                                    varargs: false,
                                    name: {
                                        node: "SimpleName",
                                        identifier: "b"
                                    },
                                    extraDimensions: 1,
                                    initializer: null
                                }
                            ],
                            extraDimensions: 0,
                            thrownExceptions: [],
                            body: null
                        },
                        {
                            node: "MethodDeclaration",
                            modifiers: [],
                            constructor: false,
                            typeParameters: [],
                            returnType2: {
                                node: "PrimitiveType",
                                primitiveTypeCode: "void"
                            },
                            name: {
                                node: "SimpleName",
                                identifier: "test"
                            },
                            parameters: [
                                {
                                    node: "SingleVariableDeclaration",
                                    modifiers: [
                                        {
                                            node: "Modifier",
                                            keyword: "final"
                                        }
                                    ],
                                    type: {
                                        node: "PrimitiveType",
                                        primitiveTypeCode: "int"
                                    },
                                    varargs: false,
                                    name: {
                                        node: "SimpleName",
                                        identifier: "a"
                                    },
                                    extraDimensions: 0,
                                    initializer: null
                                },
                                {
                                    node: "SingleVariableDeclaration",
                                    modifiers: [
                                        {
                                            node: "Modifier",
                                            keyword: "final"
                                        }
                                    ],
                                    type: {
                                        node: "ArrayType",
                                        componentType: {
                                            node: "ArrayType",
                                            componentType: {
                                                node: "ArrayType",
                                                componentType: {
                                                    node: "SimpleType",
                                                    name: {
                                                        node: "QualifiedName",
                                                        qualifier: {
                                                            node: "QualifiedName",
                                                            qualifier: {
                                                                node: "SimpleName",
                                                                identifier: "java"
                                                            },
                                                            name: {
                                                                node: "SimpleName",
                                                                identifier: "lang"
                                                            }
                                                        },
                                                        name: {
                                                            node: "SimpleName",
                                                            identifier: "String"
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    },
                                    varargs: false,
                                    name: {
                                        node: "SimpleName",
                                        identifier: "b"
                                    },
                                    extraDimensions: 1,
                                    initializer: null
                                },
                                {
                                    node: "SingleVariableDeclaration",
                                    modifiers: [],
                                    type: {
                                        node: "PrimitiveType",
                                        primitiveTypeCode: "float"
                                    },
                                    varargs: false,
                                    name: {
                                        node: "SimpleName",
                                        identifier: "c"
                                    },
                                    extraDimensions: 0,
                                    initializer: null
                                }
                            ],
                            extraDimensions: 0,
                            thrownExceptions: [],
                            body: null
                        },
                        {
                            node: "MethodDeclaration",
                            modifiers: [],
                            constructor: false,
                            typeParameters: [],
                            returnType2: {
                                node: "PrimitiveType",
                                primitiveTypeCode: "void"
                            },
                            name: {
                                node: "SimpleName",
                                identifier: "test"
                            },
                            parameters: [
                                {
                                    node: "SingleVariableDeclaration",
                                    modifiers: [],
                                    type: {
                                        node: "PrimitiveType",
                                        primitiveTypeCode: "int"
                                    },
                                    varargs: true,
                                    name: {
                                        node: "SimpleName",
                                        identifier: "f"
                                    },
                                    extraDimensions: 0,
                                    initializer: null
                                }
                            ],
                            extraDimensions: 0,
                            thrownExceptions: [],
                            body: null
                        },
                        {
                            node: "MethodDeclaration",
                            modifiers: [],
                            constructor: false,
                            typeParameters: [],
                            returnType2: {
                                node: "PrimitiveType",
                                primitiveTypeCode: "void"
                            },
                            name: {
                                node: "SimpleName",
                                identifier: "test"
                            },
                            parameters: [
                                {
                                    node: "SingleVariableDeclaration",
                                    modifiers: [],
                                    type: {
                                        node: "PrimitiveType",
                                        primitiveTypeCode: "double"
                                    },
                                    varargs: false,
                                    name: {
                                        node: "SimpleName",
                                        identifier: "n"
                                    },
                                    extraDimensions: 0,
                                    initializer: null
                                },
                                {
                                    node: "SingleVariableDeclaration",
                                    modifiers: [
                                        {
                                            node: "Modifier",
                                            keyword: "final"
                                        }
                                    ],
                                    type: {
                                        node: "ArrayType",
                                        componentType: {
                                            node: "PrimitiveType",
                                            primitiveTypeCode: "int"
                                        }
                                    },
                                    varargs: true,
                                    name: {
                                        node: "SimpleName",
                                        identifier: "g"
                                    },
                                    extraDimensions: 0,
                                    initializer: null
                                }
                            ],
                            extraDimensions: 0,
                            thrownExceptions: [],
                            body: null
                        },
                        {
                            node: "MethodDeclaration",
                            modifiers: [],
                            constructor: false,
                            typeParameters: [],
                            returnType2: {
                                node: "PrimitiveType",
                                primitiveTypeCode: "void"
                            },
                            name: {
                                node: "SimpleName",
                                identifier: "World"
                            },
                            parameters: [
                                {
                                    node: "SingleVariableDeclaration",
                                    modifiers: [],
                                    type: {
                                        node: "PrimitiveType",
                                        primitiveTypeCode: "double"
                                    },
                                    varargs: false,
                                    name: {
                                        node: "SimpleName",
                                        identifier: "n"
                                    },
                                    extraDimensions: 0,
                                    initializer: null
                                },
                                {
                                    node: "SingleVariableDeclaration",
                                    modifiers: [
                                        {
                                            node: "Modifier",
                                            keyword: "final"
                                        }
                                    ],
                                    type: {
                                        node: "ParameterizedType",
                                        type: {
                                            node: "SimpleType",
                                            name: {
                                                node: "SimpleName",
                                                identifier: "List"
                                            }
                                        },
                                        typeArguments: [
                                            {
                                                node: "ArrayType",
                                                componentType: {
                                                    node: "PrimitiveType",
                                                    primitiveTypeCode: "int"
                                                }
                                            }
                                        ]
                                    },
                                    varargs: true,
                                    name: {
                                        node: "SimpleName",
                                        identifier: "g"
                                    },
                                    extraDimensions: 0,
                                    initializer: null
                                }
                            ],
                            extraDimensions: 0,
                            thrownExceptions: [],
                            body: null
                        }
                    ]
                }
            ]
        }
      );
    });

    test("class formal params ws constructor", function(assert) {
      var src = multiline(function(){/*
        abstract class Test {
          Test() {
          }

          Test(int a) {
          }

          Test(int a, String b) {
          }

          Test(int[] a, String b[]) {
          }

          Test(final int a, final java.lang.String[][][] b[], float c) {
          }

          Test(int... f) {
          }

          Test(double n, final int[]... g) {
          }

          Test(double n, final List<int[]>... g) {
          }
          
          abstract void World();

          abstract void World(@annotation int a);

          abstract void World(int a, String b);

          abstract void World(int[] a, final @annotation  String b[]);

          abstract void World(final int a, final java.lang.String[][][] b[], float c);

          abstract void World(int... f);

          abstract void World(double n, final int[]... g);
          
          void World(double n, final List<int[]>... g) {
          }
        }
      */});
      assert.deepEqual(
        JavaParser.parse(src)
        ,
        {
            node: "CompilationUnit",
            package: null,
            imports: [],
            types: [
                {
                    node: "TypeDeclaration",
                    modifiers: [
                        {
                            node: "Modifier",
                            keyword: "abstract"
                        }
                    ],
                    interface: false,
                    name: {
                        node: "SimpleName",
                        identifier: "Test"
                    },
                    typeParameters: [],
                    superclassType: null,
                    superInterfaceTypes: [],
                    bodyDeclarations: [
                        {
                            node: "MethodDeclaration",
                            modifiers: [],
                            constructor: true,
                            typeParameters: [],
                            returnType2: null,
                            name: {
                                node: "SimpleName",
                                identifier: "Test"
                            },
                            parameters: [],
                            extraDimensions: 0,
                            thrownExceptions: [],
                            body: {
                                node: "Block",
                                statements: []
                            }
                        },
                        {
                            node: "MethodDeclaration",
                            modifiers: [],
                            constructor: true,
                            typeParameters: [],
                            returnType2: null,
                            name: {
                                node: "SimpleName",
                                identifier: "Test"
                            },
                            parameters: [
                                {
                                    node: "SingleVariableDeclaration",
                                    modifiers: [],
                                    type: {
                                        node: "PrimitiveType",
                                        primitiveTypeCode: "int"
                                    },
                                    varargs: false,
                                    name: {
                                        node: "SimpleName",
                                        identifier: "a"
                                    },
                                    extraDimensions: 0,
                                    initializer: null
                                }
                            ],
                            extraDimensions: 0,
                            thrownExceptions: [],
                            body: {
                                node: "Block",
                                statements: []
                            }
                        },
                        {
                            node: "MethodDeclaration",
                            modifiers: [],
                            constructor: true,
                            typeParameters: [],
                            returnType2: null,
                            name: {
                                node: "SimpleName",
                                identifier: "Test"
                            },
                            parameters: [
                                {
                                    node: "SingleVariableDeclaration",
                                    modifiers: [],
                                    type: {
                                        node: "PrimitiveType",
                                        primitiveTypeCode: "int"
                                    },
                                    varargs: false,
                                    name: {
                                        node: "SimpleName",
                                        identifier: "a"
                                    },
                                    extraDimensions: 0,
                                    initializer: null
                                },
                                {
                                    node: "SingleVariableDeclaration",
                                    modifiers: [],
                                    type: {
                                        node: "SimpleType",
                                        name: {
                                            node: "SimpleName",
                                            identifier: "String"
                                        }
                                    },
                                    varargs: false,
                                    name: {
                                        node: "SimpleName",
                                        identifier: "b"
                                    },
                                    extraDimensions: 0,
                                    initializer: null
                                }
                            ],
                            extraDimensions: 0,
                            thrownExceptions: [],
                            body: {
                                node: "Block",
                                statements: []
                            }
                        },
                        {
                            node: "MethodDeclaration",
                            modifiers: [],
                            constructor: true,
                            typeParameters: [],
                            returnType2: null,
                            name: {
                                node: "SimpleName",
                                identifier: "Test"
                            },
                            parameters: [
                                {
                                    node: "SingleVariableDeclaration",
                                    modifiers: [],
                                    type: {
                                        node: "ArrayType",
                                        componentType: {
                                            node: "PrimitiveType",
                                            primitiveTypeCode: "int"
                                        }
                                    },
                                    varargs: false,
                                    name: {
                                        node: "SimpleName",
                                        identifier: "a"
                                    },
                                    extraDimensions: 0,
                                    initializer: null
                                },
                                {
                                    node: "SingleVariableDeclaration",
                                    modifiers: [],
                                    type: {
                                        node: "SimpleType",
                                        name: {
                                            node: "SimpleName",
                                            identifier: "String"
                                        }
                                    },
                                    varargs: false,
                                    name: {
                                        node: "SimpleName",
                                        identifier: "b"
                                    },
                                    extraDimensions: 1,
                                    initializer: null
                                }
                            ],
                            extraDimensions: 0,
                            thrownExceptions: [],
                            body: {
                                node: "Block",
                                statements: []
                            }
                        },
                        {
                            node: "MethodDeclaration",
                            modifiers: [],
                            constructor: true,
                            typeParameters: [],
                            returnType2: null,
                            name: {
                                node: "SimpleName",
                                identifier: "Test"
                            },
                            parameters: [
                                {
                                    node: "SingleVariableDeclaration",
                                    modifiers: [
                                        {
                                            node: "Modifier",
                                            keyword: "final"
                                        }
                                    ],
                                    type: {
                                        node: "PrimitiveType",
                                        primitiveTypeCode: "int"
                                    },
                                    varargs: false,
                                    name: {
                                        node: "SimpleName",
                                        identifier: "a"
                                    },
                                    extraDimensions: 0,
                                    initializer: null
                                },
                                {
                                    node: "SingleVariableDeclaration",
                                    modifiers: [
                                        {
                                            node: "Modifier",
                                            keyword: "final"
                                        }
                                    ],
                                    type: {
                                        node: "ArrayType",
                                        componentType: {
                                            node: "ArrayType",
                                            componentType: {
                                                node: "ArrayType",
                                                componentType: {
                                                    node: "SimpleType",
                                                    name: {
                                                        node: "QualifiedName",
                                                        qualifier: {
                                                            node: "QualifiedName",
                                                            qualifier: {
                                                                node: "SimpleName",
                                                                identifier: "java"
                                                            },
                                                            name: {
                                                                node: "SimpleName",
                                                                identifier: "lang"
                                                            }
                                                        },
                                                        name: {
                                                            node: "SimpleName",
                                                            identifier: "String"
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    },
                                    varargs: false,
                                    name: {
                                        node: "SimpleName",
                                        identifier: "b"
                                    },
                                    extraDimensions: 1,
                                    initializer: null
                                },
                                {
                                    node: "SingleVariableDeclaration",
                                    modifiers: [],
                                    type: {
                                        node: "PrimitiveType",
                                        primitiveTypeCode: "float"
                                    },
                                    varargs: false,
                                    name: {
                                        node: "SimpleName",
                                        identifier: "c"
                                    },
                                    extraDimensions: 0,
                                    initializer: null
                                }
                            ],
                            extraDimensions: 0,
                            thrownExceptions: [],
                            body: {
                                node: "Block",
                                statements: []
                            }
                        },
                        {
                            node: "MethodDeclaration",
                            modifiers: [],
                            constructor: true,
                            typeParameters: [],
                            returnType2: null,
                            name: {
                                node: "SimpleName",
                                identifier: "Test"
                            },
                            parameters: [
                                {
                                    node: "SingleVariableDeclaration",
                                    modifiers: [],
                                    type: {
                                        node: "PrimitiveType",
                                        primitiveTypeCode: "int"
                                    },
                                    varargs: true,
                                    name: {
                                        node: "SimpleName",
                                        identifier: "f"
                                    },
                                    extraDimensions: 0,
                                    initializer: null
                                }
                            ],
                            extraDimensions: 0,
                            thrownExceptions: [],
                            body: {
                                node: "Block",
                                statements: []
                            }
                        },
                        {
                            node: "MethodDeclaration",
                            modifiers: [],
                            constructor: true,
                            typeParameters: [],
                            returnType2: null,
                            name: {
                                node: "SimpleName",
                                identifier: "Test"
                            },
                            parameters: [
                                {
                                    node: "SingleVariableDeclaration",
                                    modifiers: [],
                                    type: {
                                        node: "PrimitiveType",
                                        primitiveTypeCode: "double"
                                    },
                                    varargs: false,
                                    name: {
                                        node: "SimpleName",
                                        identifier: "n"
                                    },
                                    extraDimensions: 0,
                                    initializer: null
                                },
                                {
                                    node: "SingleVariableDeclaration",
                                    modifiers: [
                                        {
                                            node: "Modifier",
                                            keyword: "final"
                                        }
                                    ],
                                    type: {
                                        node: "ArrayType",
                                        componentType: {
                                            node: "PrimitiveType",
                                            primitiveTypeCode: "int"
                                        }
                                    },
                                    varargs: true,
                                    name: {
                                        node: "SimpleName",
                                        identifier: "g"
                                    },
                                    extraDimensions: 0,
                                    initializer: null
                                }
                            ],
                            extraDimensions: 0,
                            thrownExceptions: [],
                            body: {
                                node: "Block",
                                statements: []
                            }
                        },
                        {
                            node: "MethodDeclaration",
                            modifiers: [],
                            constructor: true,
                            typeParameters: [],
                            returnType2: null,
                            name: {
                                node: "SimpleName",
                                identifier: "Test"
                            },
                            parameters: [
                                {
                                    node: "SingleVariableDeclaration",
                                    modifiers: [],
                                    type: {
                                        node: "PrimitiveType",
                                        primitiveTypeCode: "double"
                                    },
                                    varargs: false,
                                    name: {
                                        node: "SimpleName",
                                        identifier: "n"
                                    },
                                    extraDimensions: 0,
                                    initializer: null
                                },
                                {
                                    node: "SingleVariableDeclaration",
                                    modifiers: [
                                        {
                                            node: "Modifier",
                                            keyword: "final"
                                        }
                                    ],
                                    type: {
                                        node: "ParameterizedType",
                                        type: {
                                            node: "SimpleType",
                                            name: {
                                                node: "SimpleName",
                                                identifier: "List"
                                            }
                                        },
                                        typeArguments: [
                                            {
                                                node: "ArrayType",
                                                componentType: {
                                                    node: "PrimitiveType",
                                                    primitiveTypeCode: "int"
                                                }
                                            }
                                        ]
                                    },
                                    varargs: true,
                                    name: {
                                        node: "SimpleName",
                                        identifier: "g"
                                    },
                                    extraDimensions: 0,
                                    initializer: null
                                }
                            ],
                            extraDimensions: 0,
                            thrownExceptions: [],
                            body: {
                                node: "Block",
                                statements: []
                            }
                        },
                        {
                            node: "MethodDeclaration",
                            modifiers: [
                                {
                                    node: "Modifier",
                                    keyword: "abstract"
                                }
                            ],
                            constructor: false,
                            typeParameters: [],
                            returnType2: {
                                node: "PrimitiveType",
                                primitiveTypeCode: "void"
                            },
                            name: {
                                node: "SimpleName",
                                identifier: "World"
                            },
                            parameters: [],
                            extraDimensions: 0,
                            thrownExceptions: [],
                            body: null
                        },
                        {
                            node: "MethodDeclaration",
                            modifiers: [
                                {
                                    node: "Modifier",
                                    keyword: "abstract"
                                }
                            ],
                            constructor: false,
                            typeParameters: [],
                            returnType2: {
                                node: "PrimitiveType",
                                primitiveTypeCode: "void"
                            },
                            name: {
                                node: "SimpleName",
                                identifier: "World"
                            },
                            parameters: [
                                {
                                    node: "SingleVariableDeclaration",
                                    modifiers: [
                                        {
                                            node: "MarkerAnnotation",
                                            typeName: {
                                                node: "SimpleName",
                                                identifier: "annotation"
                                            }
                                        }
                                    ],
                                    type: {
                                        node: "PrimitiveType",
                                        primitiveTypeCode: "int"
                                    },
                                    varargs: false,
                                    name: {
                                        node: "SimpleName",
                                        identifier: "a"
                                    },
                                    extraDimensions: 0,
                                    initializer: null
                                }
                            ],
                            extraDimensions: 0,
                            thrownExceptions: [],
                            body: null
                        },
                        {
                            node: "MethodDeclaration",
                            modifiers: [
                                {
                                    node: "Modifier",
                                    keyword: "abstract"
                                }
                            ],
                            constructor: false,
                            typeParameters: [],
                            returnType2: {
                                node: "PrimitiveType",
                                primitiveTypeCode: "void"
                            },
                            name: {
                                node: "SimpleName",
                                identifier: "World"
                            },
                            parameters: [
                                {
                                    node: "SingleVariableDeclaration",
                                    modifiers: [],
                                    type: {
                                        node: "PrimitiveType",
                                        primitiveTypeCode: "int"
                                    },
                                    varargs: false,
                                    name: {
                                        node: "SimpleName",
                                        identifier: "a"
                                    },
                                    extraDimensions: 0,
                                    initializer: null
                                },
                                {
                                    node: "SingleVariableDeclaration",
                                    modifiers: [],
                                    type: {
                                        node: "SimpleType",
                                        name: {
                                            node: "SimpleName",
                                            identifier: "String"
                                        }
                                    },
                                    varargs: false,
                                    name: {
                                        node: "SimpleName",
                                        identifier: "b"
                                    },
                                    extraDimensions: 0,
                                    initializer: null
                                }
                            ],
                            extraDimensions: 0,
                            thrownExceptions: [],
                            body: null
                        },
                        {
                            node: "MethodDeclaration",
                            modifiers: [
                                {
                                    node: "Modifier",
                                    keyword: "abstract"
                                }
                            ],
                            constructor: false,
                            typeParameters: [],
                            returnType2: {
                                node: "PrimitiveType",
                                primitiveTypeCode: "void"
                            },
                            name: {
                                node: "SimpleName",
                                identifier: "World"
                            },
                            parameters: [
                                {
                                    node: "SingleVariableDeclaration",
                                    modifiers: [],
                                    type: {
                                        node: "ArrayType",
                                        componentType: {
                                            node: "PrimitiveType",
                                            primitiveTypeCode: "int"
                                        }
                                    },
                                    varargs: false,
                                    name: {
                                        node: "SimpleName",
                                        identifier: "a"
                                    },
                                    extraDimensions: 0,
                                    initializer: null
                                },
                                {
                                    node: "SingleVariableDeclaration",
                                    modifiers: [
                                        {
                                            node: "Modifier",
                                            keyword: "final"
                                        },
                                        {
                                            node: "MarkerAnnotation",
                                            typeName: {
                                                node: "SimpleName",
                                                identifier: "annotation"
                                            }
                                        }
                                    ],
                                    type: {
                                        node: "SimpleType",
                                        name: {
                                            node: "SimpleName",
                                            identifier: "String"
                                        }
                                    },
                                    varargs: false,
                                    name: {
                                        node: "SimpleName",
                                        identifier: "b"
                                    },
                                    extraDimensions: 1,
                                    initializer: null
                                }
                            ],
                            extraDimensions: 0,
                            thrownExceptions: [],
                            body: null
                        },
                        {
                            node: "MethodDeclaration",
                            modifiers: [
                                {
                                    node: "Modifier",
                                    keyword: "abstract"
                                }
                            ],
                            constructor: false,
                            typeParameters: [],
                            returnType2: {
                                node: "PrimitiveType",
                                primitiveTypeCode: "void"
                            },
                            name: {
                                node: "SimpleName",
                                identifier: "World"
                            },
                            parameters: [
                                {
                                    node: "SingleVariableDeclaration",
                                    modifiers: [
                                        {
                                            node: "Modifier",
                                            keyword: "final"
                                        }
                                    ],
                                    type: {
                                        node: "PrimitiveType",
                                        primitiveTypeCode: "int"
                                    },
                                    varargs: false,
                                    name: {
                                        node: "SimpleName",
                                        identifier: "a"
                                    },
                                    extraDimensions: 0,
                                    initializer: null
                                },
                                {
                                    node: "SingleVariableDeclaration",
                                    modifiers: [
                                        {
                                            node: "Modifier",
                                            keyword: "final"
                                        }
                                    ],
                                    type: {
                                        node: "ArrayType",
                                        componentType: {
                                            node: "ArrayType",
                                            componentType: {
                                                node: "ArrayType",
                                                componentType: {
                                                    node: "SimpleType",
                                                    name: {
                                                        node: "QualifiedName",
                                                        qualifier: {
                                                            node: "QualifiedName",
                                                            qualifier: {
                                                                node: "SimpleName",
                                                                identifier: "java"
                                                            },
                                                            name: {
                                                                node: "SimpleName",
                                                                identifier: "lang"
                                                            }
                                                        },
                                                        name: {
                                                            node: "SimpleName",
                                                            identifier: "String"
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    },
                                    varargs: false,
                                    name: {
                                        node: "SimpleName",
                                        identifier: "b"
                                    },
                                    extraDimensions: 1,
                                    initializer: null
                                },
                                {
                                    node: "SingleVariableDeclaration",
                                    modifiers: [],
                                    type: {
                                        node: "PrimitiveType",
                                        primitiveTypeCode: "float"
                                    },
                                    varargs: false,
                                    name: {
                                        node: "SimpleName",
                                        identifier: "c"
                                    },
                                    extraDimensions: 0,
                                    initializer: null
                                }
                            ],
                            extraDimensions: 0,
                            thrownExceptions: [],
                            body: null
                        },
                        {
                            node: "MethodDeclaration",
                            modifiers: [
                                {
                                    node: "Modifier",
                                    keyword: "abstract"
                                }
                            ],
                            constructor: false,
                            typeParameters: [],
                            returnType2: {
                                node: "PrimitiveType",
                                primitiveTypeCode: "void"
                            },
                            name: {
                                node: "SimpleName",
                                identifier: "World"
                            },
                            parameters: [
                                {
                                    node: "SingleVariableDeclaration",
                                    modifiers: [],
                                    type: {
                                        node: "PrimitiveType",
                                        primitiveTypeCode: "int"
                                    },
                                    varargs: true,
                                    name: {
                                        node: "SimpleName",
                                        identifier: "f"
                                    },
                                    extraDimensions: 0,
                                    initializer: null
                                }
                            ],
                            extraDimensions: 0,
                            thrownExceptions: [],
                            body: null
                        },
                        {
                            node: "MethodDeclaration",
                            modifiers: [
                                {
                                    node: "Modifier",
                                    keyword: "abstract"
                                }
                            ],
                            constructor: false,
                            typeParameters: [],
                            returnType2: {
                                node: "PrimitiveType",
                                primitiveTypeCode: "void"
                            },
                            name: {
                                node: "SimpleName",
                                identifier: "World"
                            },
                            parameters: [
                                {
                                    node: "SingleVariableDeclaration",
                                    modifiers: [],
                                    type: {
                                        node: "PrimitiveType",
                                        primitiveTypeCode: "double"
                                    },
                                    varargs: false,
                                    name: {
                                        node: "SimpleName",
                                        identifier: "n"
                                    },
                                    extraDimensions: 0,
                                    initializer: null
                                },
                                {
                                    node: "SingleVariableDeclaration",
                                    modifiers: [
                                        {
                                            node: "Modifier",
                                            keyword: "final"
                                        }
                                    ],
                                    type: {
                                        node: "ArrayType",
                                        componentType: {
                                            node: "PrimitiveType",
                                            primitiveTypeCode: "int"
                                        }
                                    },
                                    varargs: true,
                                    name: {
                                        node: "SimpleName",
                                        identifier: "g"
                                    },
                                    extraDimensions: 0,
                                    initializer: null
                                }
                            ],
                            extraDimensions: 0,
                            thrownExceptions: [],
                            body: null
                        },
                        {
                            node: "MethodDeclaration",
                            modifiers: [],
                            constructor: false,
                            typeParameters: [],
                            returnType2: {
                                node: "PrimitiveType",
                                primitiveTypeCode: "void"
                            },
                            name: {
                                node: "SimpleName",
                                identifier: "World"
                            },
                            parameters: [
                                {
                                    node: "SingleVariableDeclaration",
                                    modifiers: [],
                                    type: {
                                        node: "PrimitiveType",
                                        primitiveTypeCode: "double"
                                    },
                                    varargs: false,
                                    name: {
                                        node: "SimpleName",
                                        identifier: "n"
                                    },
                                    extraDimensions: 0,
                                    initializer: null
                                },
                                {
                                    node: "SingleVariableDeclaration",
                                    modifiers: [
                                        {
                                            node: "Modifier",
                                            keyword: "final"
                                        }
                                    ],
                                    type: {
                                        node: "ParameterizedType",
                                        type: {
                                            node: "SimpleType",
                                            name: {
                                                node: "SimpleName",
                                                identifier: "List"
                                            }
                                        },
                                        typeArguments: [
                                            {
                                                node: "ArrayType",
                                                componentType: {
                                                    node: "PrimitiveType",
                                                    primitiveTypeCode: "int"
                                                }
                                            }
                                        ]
                                    },
                                    varargs: true,
                                    name: {
                                        node: "SimpleName",
                                        identifier: "g"
                                    },
                                    extraDimensions: 0,
                                    initializer: null
                                }
                            ],
                            extraDimensions: 0,
                            thrownExceptions: [],
                            body: {
                                node: "Block",
                                statements: []
                            }
                        }
                    ]
                }
            ]
        }
      );
    });

