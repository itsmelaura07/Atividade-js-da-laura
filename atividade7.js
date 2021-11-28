function calculateArea(shape) {

    // calculate the shape's area
    switch (shape) {
        case "square":
            let side = document.getElementById("id_side").value;
            return side * side;
    }
  }
  
  console.log("Square: " + calculateArea("square"));