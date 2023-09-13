library(shiny)
library(tidyverse)
library(janitor)

ui <- fluidPage(
  tags$head(includeCSS("www/clean.css")),
  titlePanel(title = 'Intro to Histograms'),
  sidebarPanel(
    tags$h3("Sample Size"),
    sliderInput("num", "Number of Random Numbers", value = 10, min = 1, max = 200),
    tags$h3('Choose Bins'),
    sliderInput("bin", "Number of bins", value = 10, min = 1, max = 30),
    # Additional UI components for the sidebar go here
  ),
  mainPanel(
    plotOutput('hist'),
    verbatimTextOutput('table')
  )
)

server <- function(input, output, session) {
  observeEvent(c(input$num,input$bin), {
    numbers <- rnorm(input$num, 100, 15) %>% round(0)
    num_dat <- data.frame(value = numbers)
    table_count <- num_dat %>% tabyl(value) %>% adorn_pct_formatting()
    
    output$hist <- renderPlot({
      num_dat %>% ggplot(aes(value)) + 
        geom_histogram(col = 'black', fill = 'orange', alpha = 0.6,bins = input$bin) +
        scale_x_continuous(name = 'IQ scores') +
        papaja::theme_apa()
    })
    
    output$table <- renderPrint({
      table_count
    })
  })
}

shinyApp(ui, server)


