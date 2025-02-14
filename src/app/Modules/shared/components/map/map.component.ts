import { Component, ElementRef, NgZone, OnDestroy, OnInit } from '@angular/core';
import * as echarts from 'echarts';
import * as am5 from "@amcharts/amcharts5";
import * as am5map from "@amcharts/amcharts5/map";
import am5geodataWorldLow from "@amcharts/amcharts5-geodata/worldLow";

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent  implements OnInit, OnDestroy {
  private root!: am5.Root;

  constructor(private elementRef: ElementRef, private ngZone: NgZone) {}

  ngOnInit(): void {
    this.ngZone.runOutsideAngular(() => {
      let root = am5.Root.new(this.elementRef.nativeElement.querySelector("#mapdiv"));

      let chart = root.container.children.push(
        am5map.MapChart.new(root, {
          panX: "rotateX",
          panY: "none",
          projection: am5map.geoNaturalEarth1()
        })
      );

      let polygonSeries = chart.series.push(
        am5map.MapPolygonSeries.new(root, {
          geoJSON: am5geodataWorldLow
        })
      );

      polygonSeries.mapPolygons.template.setAll({
        tooltipText: "{name}",
        fill: am5.color(0x74B3CE),
        stroke: am5.color(0xffffff)
      });

      this.root = root;
    });
  }

  ngOnDestroy(): void {
    if (this.root) {
      this.root.dispose();
    }
  }
}
