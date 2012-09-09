# So I don't have to keep putitng the same note each time, I use pejorative 
# terms good and bad to describe cities as a shorthand, not meaning them as a 
# value judgement. The analysis is meant to be impartial and unbiassed.

library(ggplot2)
indicators <- read.csv(file="all indicators.csv")
# the mean of all ratings for each city
mean.ratings <- 
	ddply(melt(indicators), .(city), summarise, mean=mean(value, na.rm=TRUE))
# show the p10 and p90
quantile(mean.ratings$mean, c(0.1, 0.9))

# Find the (arbitrary) good and bad places
# This can be changed though, you can make lists of good and bad cities based
# on different considerations. For example, if you're more interested in
# temporary living then you could prioritise cities with good transport
# connections and hotels. You could customise it with your own personal
# preferences - putting cities in that have plenty of nightlife.
good.places <- 
	mean.ratings$city[mean.ratings$mean < quantile(mean.ratings$mean, 0.1)]
bad.places <- 
	mean.ratings$city[mean.ratings$mean > quantile(mean.ratings$mean, 0.9)]


df <- data.frame(matrix(ncol=4))
names(df) <- c("cl", "city", "good.proportion", "bad.proportion")
df <- df[0, ]


# A function which calculates the proportions of good and bad cities in a data 
# frame.
proportions <- function(df){
  return(
    data.frame(
      good.proportion = sum(df$city %in% good.places, na.rm=TRUE)/nrow(df),
      bad.proportion = sum(df$city %in% bad.places, na.rm=TRUE)/nrow(df)
    )
  )
}

# This loop does a 14 cluster kmeans on all of the indicators, calculates the 
# proportion of good and bad cities in each of the clusters, then appends the 
# proportion to the data frame defined above.
for (i in 1:1000){
  fit <- kmeans(subset(indicators, select=-c(city)), centers=14)
  fit <- data.frame(cl = fit$cluster, city = indicators$city)
  df <- rbind(df, merge(fit, ddply(fit, .(cl), proportions)))
}

# Calculate how often each city was in the good and bad clusters.
goodbad <- ddply(df, 
				 .(city), 
				 summarise, 
				 	good=mean(good.proportion), bad=mean(bad.proportion))

goodbad[with(goodbad, order(good)), ]

goodbad$score <- goodbad$good - goodbad$bad
