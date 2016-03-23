FROM alpine:3.3

ENV JAVA_HOME=/usr/lib/jvm/default-jvm
ENV PATH /usr/local/bin:$PATH

RUN apk add --update bash openjdk7-jre java-cacerts && \
    ln -sf "${JAVA_HOME}/bin/"* "/usr/bin/"

# fix broken cacerts
RUN rm -f /usr/lib/jvm/default-jvm/jre/lib/security/cacerts && \
    ln -s /etc/ssl/certs/java/cacerts /usr/lib/jvm/default-jvm/jre/lib/security/cacerts

# add Metabase jar
COPY ./metabase.jar /app/

# add our run script to the image
COPY ./run_metabase.sh /app/
RUN chmod 755 /app/run_metabase.sh

# tidy up
RUN rm -rf /tmp/* /var/cache/apk/*

# expose our default runtime port
EXPOSE 3000

# run it
ENTRYPOINT ["/app/run_metabase.sh"]
