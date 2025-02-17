import { Component, ElementRef, Injector, Input, NgZone, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import * as echarts from 'echarts';
import * as am5 from "@amcharts/amcharts5";
import * as am5map from "@amcharts/amcharts5/map";
import am5geodataWorldLow from "@amcharts/amcharts5-geodata/worldLow";
import { BaseComponent } from '../../base.component';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent extends BaseComponent {
  private root!: am5.Root;
  @Input() data = [];
  @Input() animated: boolean = true;

  constructor(inject: Injector, private elementRef: ElementRef, private ngZone: NgZone) {
    super(inject)
  }

  protected override ngSuperOnChanges(changes: SimpleChanges) {
  }
  protected override ngSuperOnInit() {
    this.createChart()

  }

  createChart() {

    this.ngZone.runOutsideAngular(() => {
      let data:any[] = [];
      const _self = this;

      // Prepare data for the chart
      this.data.forEach((element:any) => {
          data.push({
            subjectId:element.subjectId,
            id: element.xKey,
            country: element.xKey,
            name: element.xKey,
            value: Number(element.xValue),
            bulletSettings: { fill: element.color },
            extraData: element.extraData
          });

      });
      
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
      let pointSeries = chart.series.push(am5map.MapPointSeries.new(root, {
        polygonIdField: "country"
      }));
      pointSeries.data.setAll(data);

      pointSeries.bullets.push(function (root, series, dataItem) {
        let container = am5.Container.new(root, {});
        // if (_self.animated) {
          let circle = container.children.push(
            am5.Circle.new(root, {
              radius: 4,
              tooltipY: 0,
              templateField: "bulletSettings",
              strokeOpacity: 0
            })
          );
          let circle2 = container.children.push(
            am5.Circle.new(root, {
              radius: 4,
              tooltipY: 0,
              templateField: "bulletSettings",
              strokeOpacity: 0
            })
          );

          circle.animate({
            key: "scale",
            from: 1,
            to: 5,
            duration: 600,
            easing: am5.ease.out(am5.ease.cubic),
            loops: Infinity
          });
          circle.animate({
            key: "opacity",
            from: 1,
            to: 0.1,
            duration: 600,
            easing: am5.ease.out(am5.ease.cubic),
            loops: Infinity
          });
        // } else {


        // }



        return am5.Bullet.new(root, {
          sprite: container,
        });
      });

      polygonSeries.mapPolygons.template.setAll({
        tooltipText: "{name}",
        fill: am5.color(0x74B3CE),
        stroke: am5.color(0xffffff)
      });

      this.root = root;
    });
  }
  protected override ngSuperAfterViewInit() {
  }
  protected override ngSuperOnDestroy() {
    if (this.root) {
      this.root.dispose();
    }
  }




}
