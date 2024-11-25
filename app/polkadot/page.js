"use client";
import React, { useEffect, useRef, useState } from 'react'
import { w3cwebsocket as W3CWebSocket } from 'websocket';
import '../styles/index.css';
import '@fortawesome/fontawesome-free/css/all.css';

export default function page() {
    const [polkadotPrice, setPolkadotPrice] = useState(null);
    const [loading, setLoading] = useState(true);
    const [prevPrice, setPrevPrice] = useState(null);
    const priceTextRef = useRef(null);
    const [arrowDirection, setArrowDirection] = useState(null);
  
    useEffect(() => {
      const client = new W3CWebSocket('wss://stream.binance.com:9443/ws/dotusdt@trade');
  
      client.onopen = () => {
        console.log('WebSocket Client Connected');
      };
      client.onmessage = (message) => {
        const data = JSON.parse(message.data);
        const formattedPrice = parseFloat(data.p).toLocaleString('en-US', { maximumFractionDigits: 2 });
        setPolkadotPrice(formattedPrice);
        setLoading(false); //Make it false when the data is loaded
  
        //Comparing to the previous price
        if (prevPrice !== null) {
          if (formattedPrice > prevPrice) {
            //if the new price is higher than the previous one, make the text green
            priceTextRef.current.style.color = 'green';
            setArrowDirection('up');
          } else if (formattedPrice < prevPrice) {
            //if the new price is lower than the previous one, make the text red
            priceTextRef.current.style.color = 'red';
            setArrowDirection('down');
          } else {
            //if the new price is equal to the previous one, make the text white
            priceTextRef.current.style.color = 'white';
            setArrowDirection(null);
          }
        }
        setPrevPrice(formattedPrice);
      };
  
      return () => client.close();
    }, [prevPrice]);

    useEffect(() => {
      if (loading) {
        document.title = "Loading...";
      } else if (polkadotPrice) {
        document.title = `DOT Price: $${polkadotPrice}`;
      }
    }, [loading, polkadotPrice]);
  
    return (
      <>
        <div className="crypto-container">
          <h2>Polkadot Price: <span ref={priceTextRef} className="price-text">{loading && <div className="spinner"></div>}{polkadotPrice && `$${polkadotPrice}`}</span></h2>
          {arrowDirection === 'up' && (
          <i className="fas fa-angle-up" style={{ fontSize: '36px', color: 'green' }}></i>
          )}
          {arrowDirection === 'down' && (
            <i className="fas fa-angle-down" style={{ fontSize: '36px', color: 'red' }}></i>
          )}
        </div>
      </>
    )
  }
