import { Component, input, Input, OnInit } from '@angular/core';
import { PrimengModule } from '../primeng/primeng-module';
import { ChartModule } from 'primeng/chart';

@Component({
  selector: 'app-charts',
  imports: [PrimengModule],
  templateUrl: './charts.html',
  styleUrl: './charts.css',
})
export class Charts implements OnInit{
   basicData: any;

   @Input() chartDataLabels!:any[];
   @Input() chartDataValue!:any[];
   @Input() chartType!:string;
   @Input() chartColor:any;
  basicOptions: any;

  ngOnInit(): void {

    const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');
        const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
        const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

        this.basicData = {
            labels: [this.chartDataLabels[0], this.chartDataLabels[1], this.chartDataLabels[2], this.chartDataLabels[3]],
            datasets: [
                {
                    label: 'Sales',
                    data: [this.chartDataValue[0], this.chartDataValue[1], this.chartDataValue[2], this.chartDataValue[3]],
                    backgroundColor: ['rgba(255, 159, 64, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(153, 102, 255, 0.2)'],
                    borderColor: ['rgb(255, 159, 64)', 'rgb(75, 192, 192)', 'rgb(54, 162, 235)', 'rgb(153, 102, 255)'],
                    borderWidth: 1
                }
            ]
        };

        this.basicOptions = {
            plugins: {
                legend: {
                    labels: {
                        color: textColor
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder,
                        drawBorder: false
                    }
                },
                x: {
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

