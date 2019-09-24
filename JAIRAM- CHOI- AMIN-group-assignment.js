{
  "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
  "description": "Make vs Engine Size",
  "data": {"url": "https://raw.githubusercontent.com/avinashjairam/Data-Visualization-Class-Groupwork-/master/imports-85.csv"
    
    
  },
  "mark": "point",
  "encoding": {
    "y": {"field": "engine-size", "type": "quantitative"},
    "x": {"field": "make", "type": "nominal"}
  }
}
