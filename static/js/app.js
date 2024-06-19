// Build the metadata panel
  function buildMetadata(sampleID) {
    d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {

      // get the metadata field
      let metadata = data.metadata;

      // Filter the metadata for the object with the desired sample number
      let resultArray = metadata.filter(sample => sample.id == sampleID);
      let result = resultArray[0];

      // Use d3 to select the panel with id of `#sample-metadata`
      let panel = d3.select('#sample-metadata');

      // Use `.html("") to clear any existing metadata
      panel.html("");

      // Inside a loop, you will need to use d3 to append new
      Object.entries(result).forEach(([key, value]) => {
      // tags for each key-value in the filtered metadata.
        panel.append("h6").text(`${key.toUpperCase()}: ${value}`);
      });
    });
  }

// function to build both charts
function buildCharts(sampleID) {
  d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {

    // Get the samples field
    let samples = data.samples;
    //console.log(samples);

    // Filter the samples for the object with the desired sample number
    let filteredSampleArray = samples.filter(sampleObj => sampleObj.id == sampleID);
    let filteredData = filteredSampleArray[0];
    //console.log(filteredData);
    
    if (filteredData) {
      // Get the otu_ids, otu_labels, and sample_values
      let otu_ids = filteredData.otu_ids;
      let otu_labels = filteredData.otu_labels;
      let sample_values = filteredData.sample_values;

      //console.log(otu_ids, otu_labels, sample_values);

      // Build a Bubble Chart
      let bubbleTrace = {
        x: otu_ids,
        y: sample_values,
        text: otu_labels,
        mode: 'markers',
        marker: {
          size: sample_values,
          color: otu_ids,
          colorscale: 'Earth'
        }
      };

      //create bubbleLayout
      let bubbleLayout = {
        title: 'Bacteria Cultures Per Sample',
        xaxis: {title: 'Number of Bacteria' },
        yaxis: {title: 'OTU ID' },
      };

      // Render the Bubble Chart
      let bubbleData = [bubbleTrace];
      Plotly.newPlot("bubble", bubbleData, bubbleLayout);

      // For the Bar Chart, map the otu_ids to a list of strings for your yticks
      // Don't forget to slice and reverse the input data appropriately
      let ytick = otu_ids.slice(0,10).map(otuID => `OTU ${otuID}`).reverse();
      let top10SampleValues = sample_values.slice(0, 10).reverse();
      let top10OtuLabels = otu_labels.slice(0, 10).reverse();

      // Build a Bar Chart
      let barTrace = {
        x: top10SampleValues,
        y: ytick,
        text: top10OtuLabels,
        type: 'bar',
        orientation: 'h'
      };

      //Create layout 
      let barLayout = {
        title: "Top 10 Bacteria Cultures Found",
        xaxis: {title: "Number of Bacteria" }
      }

      let barData = [barTrace];

      // Render the Bar Chart
      Plotly.newPlot('bar', barData, barLayout);
    }
  });
}

// Function to run on page load
function init() {
  d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {

    // Get the names field
    let sampleNames = data.names

    // Use d3 to select the dropdown with id of `#selDataset`
    let dropdown = d3.select('#selDataset');

    // Use the list of sample names to populate the select options
    // Hint: Inside a loop, you will need to use d3 to append a new
    // option for each sample name.
    sampleNames.forEach((sample)=>{
      dropdown.append("option").text(sample).property("value", sample);
    });

    // Get the first sample from the list
    let firstSample = sampleNames[0];

    // Build charts and metadata panel with the first sample
    buildMetadata(firstSample);
    buildCharts(firstSample);
  });
}

// Function for event listener
function optionChanged(newSample) {
  // Build charts and metadata panel each time a new sample is selected
  buildMetadata(newSample);
  buildCharts(newSample);
}

// Initialize the dashboard
init();
