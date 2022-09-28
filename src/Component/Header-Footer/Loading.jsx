import React from 'react'
import $ from 'jquery'

export default function Loading() {
    $(document).ready(function(){
        $(".sk-chase").fadeOut(2000, ()=>{
            $("#loading").fadeOut(2500, ()=>{
                $('body').css('overflow', 'auto')
            });
        })
    })
  return (
    <>
      <section id="loading">
        <div class="sk-chase">
            <div class="sk-chase-dot"></div>
            <div class="sk-chase-dot"></div>
            <div class="sk-chase-dot"></div>
            <div class="sk-chase-dot"></div>
            <div class="sk-chase-dot"></div>
            <div class="sk-chase-dot"></div>
        </div>
      </section>
    </>
  )
}
