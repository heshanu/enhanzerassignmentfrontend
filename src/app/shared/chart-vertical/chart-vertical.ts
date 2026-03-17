import { Component, Input, OnInit } from '@angular/core';
import { ChartModule } from 'primeng/chart';
import { PrimengModule } from '../primeng/primeng-module';

@Component({
  selector: 'app-chart-vertical',
  imports: [PrimengModule],
  templateUrl: './chart-vertical.html',
  styleUrl: './chart-vertical.css',
})
export class ChartVertical implements OnInit {
    @Input() data: any;
    @Input() chartDataLabels!:any[];
    @Input() chartType!:string;
    @Input() chartColor:any;
    @Input() chartDataValue!:any[];
    options: any;

    ngOnInit() {
        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');
        const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
        const surfaceBorder = documentStyle.getPropertyValue('--surface-border');
        
        this.data = {
  labels: this.chartDataLabels.slice(0, 6),
  datasets: this.chartDataValue
};                        
         
        this.options = {
            maintainAspectRatio: false,
            aspectRatio: 0.8,
            plugins: {
                legend: {
                    labels: {
                        color: textColor
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: textColorSecondary,
                        font: {
                            weight: 500
                        }
                    },
                    grid: {
                        color: surfaceBorder,
                        drawBorder: false
                    }
                },
                y: {
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder,
                        drawBorder: false
                    }
                }

            }
        };
    }
  }

