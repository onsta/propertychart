<template>
  <div id="PropertyChart" />
</template>

<script>
import * as d3 from "d3";

import { getColor } from "../helpers";

export default {
  name: "PropertyChart",
  mounted() {
    const margin = { top: 40, right: 40, bottom: 40, left: 40 },
      width = 800 - margin.left - margin.right,
      height = 800 - margin.top - margin.bottom;

    const x = d3.scaleLinear().range([0, width]);
    const y = d3.scaleLinear().range([height, 0]);

    const svg = d3
      .select("#PropertyChart")
      .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    d3.json("http://127.0.0.1:8081/api/sold-properties").then(data => {
      x.domain(
        d3.extent(data, d => {
          return d.x;
        })
      ).nice();
      y.domain(
        d3.extent(data, d => {
          return d.y;
        })
      ).nice();

      // X scale
      svg
        .append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(x));

      // Y scale
      svg
        .append("g")
        .attr("class", "y axis")
        .call(d3.axisLeft(y));

      // Add properties
      svg
        .selectAll(".point")
        .data(data)
        .enter()
        .append("path")
        .attr("class", "point")
        .attr("d", d3.symbol().type(d3.symbolCircle))
        .attr("transform", d => {
          return "translate(" + x(d.x) + "," + y(d.y) + ")";
        })
        .style("fill", d => getColor(d.price))
        .append("svg:title")
        .text(function(d) {
          return `Property located in X${d.x} Y${d.y} has been sold for ${d.price}GBP`;
        });
    });
  }
};
</script>
