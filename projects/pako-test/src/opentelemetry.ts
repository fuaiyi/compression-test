import { detectResourcesSync, Resource } from "@opentelemetry/resources";
import { browserDetector } from "@opentelemetry/opentelemetry-browser-detector";
import { logs } from "@opentelemetry/api-logs";
import { LoggerProvider, BatchLogRecordProcessor } from "@opentelemetry/sdk-logs";
import { OTLPLogExporter } from "@opentelemetry/exporter-logs-otlp-http";
import { CompressionAlgorithm } from "@opentelemetry/otlp-exporter-base";

const resource = detectResourcesSync({ detectors: [browserDetector] }).merge(
  new Resource({
    "tps.tenant.id": "default",
    "app.id": "demo_app",
    "server.id": "demo_client",
    "server.owner": "fuaiyi",
    "service.name": "demo_client",
  })
);

const loggerProvider = new LoggerProvider({ resource });
loggerProvider.addLogRecordProcessor(
  new BatchLogRecordProcessor(
    new OTLPLogExporter({
      url: "https://tpstelemetry.tencent.com/v1/logs",
      headers: { "X-Tps-TenantID": "default" },
      compression: CompressionAlgorithm.GZIP,
    })
  )
);
// 3. 绑定为全局对象(非必选)
logs.setGlobalLoggerProvider(loggerProvider);

export const logger = logs.getLogger("example");
