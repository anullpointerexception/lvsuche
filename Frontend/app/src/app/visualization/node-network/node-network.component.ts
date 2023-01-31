import {
  Component,
  AfterViewInit,
  ElementRef,
  ViewChild,
  Renderer2,
} from '@angular/core';
import { MatButton } from '@angular/material/button';
import { Network, DataSet } from 'vis'; //EOL Version
//import { network } from 'vis-network'; // Migration to this version in InnoLab2

@Component({
  selector: 'app-node-network',
  templateUrl: './node-network.component.html',
  styleUrls: ['./node-network.component.css'],
})
export class NodeNetworkComponent implements AfterViewInit {
  @ViewChild('network') el: any;

  constructor(private renderer: Renderer2, private elRef: ElementRef) {
    this.el = ViewChild('network');
  }

  private static networkInstance: any;

  public isVisited = false;

  public checkVisited() {
    if (!this.isVisited) {
      this.isVisited = true;
      const inputField: HTMLInputElement = this.renderer.createElement('input');
      inputField.value = 'Close';
      inputField.type = 'button';
      inputField.className = 'closeButton btn btn-primary fh-primary-input';
      inputField.onclick = () => this.setDefault();
      this.renderer.appendChild(this.el.nativeElement, inputField);
    }
  }

  public setDefault() {
    document
      .querySelector('.node-class-fullscreen')
      .classList.remove('node-class-fullscreen');
    this.isVisited = false;
    const closeButton = this.el.nativeElement.querySelector('.closeButton');
    this.renderer.removeChild(this.el.nativeElement, closeButton);
  }

  public onNodeClick(nodes) {
    console.log('test');
  }

  static highlightNode(nodeId: number): any {
    console.log('Highlight ', nodeId);
    this.networkInstance.focus(nodeId, {
      scale: 0.65,
      animation: {
        duration: 1000,
        easingFunction: 'easeOutQuad',
      },
    });
  }

  ngAfterViewInit() {
    const container = this.el.nativeElement;

    const nodes = new DataSet<any>([
      { id: 1, label: 'Machine Learning', group: 'Informatik', title: '' },
      { id: 7, label: 'Einführung in die AI', group: 'Informatik' },
      { id: 20, label: 'Maschinenbau', group: 'Maschinenbau' },
      { id: 4, label: 'MACS 2', group: 'Mathematik' },
      { id: 5, label: 'MACS 1', group: 'Mathematik' },
      { id: 16, label: 'Webentwicklung', group: 'Informatik' },
      { id: 2, label: 'Werkstofftechnik', group: 'Maschinenbau' },
      { id: 8, label: 'Lineare Algebra', group: 'Mathematik' },
      { id: 49, label: 'Datenbanken', group: 'Informatik' },
      { id: 30, label: 'Thermodynamik', group: 'Maschinenbau' },
      { id: 3, label: 'Introduction.pdf', group: 'Machinelearning' },
      { id: 6, label: 'Skriptum_B.pdf', group: 'Machinelearning' },
      { id: 9, label: 'Skriptum_A.pdf', group: 'Machinelearning' },
      { id: 10, label: 'Skriptum_A.py', group: 'Machinelearning' },
      { id: 12, label: 'Folien_1.pdf', group: 'Machinelearning' },
      { id: 13, label: 'Examplecode.js', group: 'Machinelearning' },
    ]);

    const edges = new DataSet<any>([
      { from: 1, to: 3 },
      { from: 1, to: 6 },
      { from: 1, to: 49 },
      { from: 7, to: 9 },
      { from: 7, to: 10 },
      { from: 7, to: 11 },
      { from: 7, to: 12 },
      { from: 4, to: 1 },
      { from: 5, to: 1 },
      { from: 3, to: 7 },
      { from: 8, to: 3 },
      { from: 8, to: 4 },
      { from: 8, to: 5 },
      { from: 6, to: 9 },
      { from: 2, to: 9 },
      { from: 10, to: 4 },
      { from: 10, to: 3 },
      { from: 13, to: 7 },
      { from: 49, to: 16 },
    ]);
    const data = { nodes, edges };

    const options = {
      nodes: {
        shape: 'dot',
        size: 40,
        fixed: {
          y: false,
          x: false,
        },
      },

      physics: {
        forceAtlas2Based: {
          gravitationalConstant: -26,
          centralGravity: 0.005,
          springLength: 230,
          springConstant: 0.18,
        },
        maxVelocity: 146,
        solver: 'forceAtlas2Based',
        timestep: 0.35,
        stabilization: { iterations: 150 },
        repulsion: {
          springLength: 0,
          damping: 0,
        },
      },
    };

    NodeNetworkComponent.networkInstance = new Network(
      container,
      data,
      options
    );
    NodeNetworkComponent.networkInstance.fit();
  }
}
