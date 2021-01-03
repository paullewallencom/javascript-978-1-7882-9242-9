
// Clojure 
(filter #(>= %1 3) (map #(* 2 %1) (array 1 2 3)))

// PureScript
filter (\n -> n>3) (map (\n -> n*2) [1, 2, 3])

// Scala
List( 1, 2, 3 ).map( x => 2*x ).filter( x => x > 3 ) )

// Elm
filter (\n -> n>3) (map (\n -> n*2) [1, 2, 3])