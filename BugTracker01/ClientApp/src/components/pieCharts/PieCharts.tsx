import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { db } from '../fakedb/db.js';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./pieCharts.css"

ChartJS.register(ArcElement, Tooltip, Legend);

export const type = {
  labels: ['Issue', 'Bug', 'Feature request'],
  datasets: [
    {
      label: '# of Votes',
      data: [db[0].age,db[1].age,db[2].age],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
       
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',

      ],
      borderWidth: 1,
    },
  ],
};

export const priority = {
    labels: ['Immediate', 'High', 'Low','Medium'],
    datasets: [
      {
        label: '# of Votes',
        data: [db[0].age,db[1].age,db[2].age,db[3].age],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(153, 102, 255, 1)',    
         
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
  
        ],
        borderWidth: 1,
      },
    ],
  };

  export const status = {
    labels: ['Resolved', 'New', 'In progress'],
    datasets: [
      {
        label: '# of Votes',
        data: [db[0].age,db[1].age,db[2].age],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
         
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
  
        ],
        borderWidth: 1,
      },
    ],
  };

export default function PieCharts() {
    return (
      <div className="pieChartsContainer" style={{position: "relative", maxHeight:"1%", zIndex: 99}}>
        <Card>
        <Card.Header style={{backgroundColor: '#FF7630'}} className="text-light bg-gradient">Tickets by Type</Card.Header>
        <Card.Body>

          <Card.Text>
            <Pie 
            data={type}
            options={{
                responsive: true, maintainAspectRatio: false,
                plugins: {
                tooltip: {
                    callbacks: {
                    label: function(context) {
                        var age = context.dataset.data[context.dataIndex];
                        return age;
                    }
                    }
                }
                }
            }} 
            />
    
          </Card.Text>

        </Card.Body>
      </Card>
      <br />
    <Card>
    <Card.Header style={{backgroundColor: '#FF7630'}} className="text-light bg-gradient">Tickets by Priority</Card.Header>
    <Card.Body>

    <Card.Text>
        <Pie 
        data={priority}
        options={{
            responsive: true, maintainAspectRatio: false,
            plugins: {
            tooltip: {
                callbacks: {
                label: function(context) {
                    var age = context.dataset.data[context.dataIndex];
                    return age;
                }
                }
            }
            }
        }} 
        />

    </Card.Text>

    </Card.Body>
    </Card>
    <br />
    <Card>
    <Card.Header style={{backgroundColor: '#FF7630'}} className="text-light bg-gradient">Tickets by Status</Card.Header>
    <Card.Body>

    <Card.Text>
        <Pie 
        data={status}
        options={{
            responsive: true, maintainAspectRatio: false,
            plugins: {
            tooltip: {
                callbacks: {
                label: function(context) {
                    var age = context.dataset.data[context.dataIndex];
                    return age;
                }
                }
            }
            }
        }} 
        />

    </Card.Text>

    </Card.Body>
    </Card>

    </div>

    );
  }